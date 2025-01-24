import { defineClientConfig } from '@vuepress/client'
import '@docsearch/css'

declare const VERSION: string;
declare const VERSION_FULL: string;
declare const API_MIN_VERSION: string;
declare const API_DEP_RELEASE: string;
declare const API_DEP_VERSION: string;
declare const API_VERSION: string;
declare const CLI_VERSION: string;


export default defineClientConfig({
  enhance({ app, router, siteData }) {
    Object.defineProperties(app.config.globalProperties, {
      $rundeckVersion: { get: () => VERSION },
      $rundeckVersionFull: { get: () => VERSION_FULL },
      $apiMinVersion: { get: () => API_MIN_VERSION },
      $apiDepRelease: { get: () => API_DEP_RELEASE },
      $apiDepVersion: { get: () => API_DEP_VERSION },
      $apiVersion: { get: () => API_VERSION },
      $cliVersion: { get: () => CLI_VERSION },
    });

    if (typeof window !== 'undefined') {
      // Monitor XHR requests
      const originalXHR = window.XMLHttpRequest;
      function newXHR() {
        const xhr = new originalXHR();

        xhr.addEventListener('load', function () {
          if (xhr.responseURL?.includes('algolia')) {
            try {
              const data = JSON.parse(xhr.responseText);
              if (data.results?.[0]?.hits) {
                setTimeout(() => {
                  const hits = document.querySelectorAll('.DocSearch-Hit:empty');
                  hits.forEach((hit, index) => {
                    const hitData = data.results[0].hits[index];
                    if (hitData) {
                      const link = document.createElement('a');
                      link.href = hitData.url;
                      link.className = 'DocSearch-Hit-Container';

                      const title = hitData.hierarchy.lvl1 || hitData.hierarchy.lvl0;
                      const content = hitData.content;

                      link.innerHTML = `
                          <div class="DocSearch-Hit-icon">
                            <svg width="20" height="20" viewBox="0 0 20 20">
                              <path d="M17 5H3h14zm0 5H3h14zm0 5H3h14z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path>
                            </svg>
                          </div>
                          <div class="DocSearch-Hit-content-wrapper">
                            <span class="DocSearch-Hit-title">${title}</span>
                            <span class="DocSearch-Hit-path">${content}</span>
                          </div>
                          <div class="DocSearch-Hit-action">
                            <svg class="DocSearch-Hit-Select-Icon" width="20" height="20" viewBox="0 0 20 20">
                              <g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 3v4c0 2-2 4-4 4H2"></path>
                                <path d="M8 17l-6-6 6-6"></path>
                              </g>
                            </svg>
                          </div>
                        `;

                      hit.appendChild(link);

                      // Make the link clickable
                      link.addEventListener('click', (e) => {
                        e.preventDefault();
                        window.location.href = hitData.url;
                      });
                    }
                  });
                }, 100);
              }
            } catch (e) {
              console.error('Error processing response:', e);
            }
          }
        });

        return xhr;
      }

      window.XMLHttpRequest = newXHR as any;
    }
  },
  setup() { },
  rootComponents: [],
})