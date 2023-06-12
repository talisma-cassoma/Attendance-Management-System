export default function html(className, classNameIndex) {
    return `
    <div class="header">
       <span>${className}</span>
       <svg id="edit-icon" role="button" tabindex="0" width="19" height="18" viewBox="0 0 19 18" fill="none"
           xmlns="http://www.w3.org/2000/svg" aria-label="Rename class">
           <path fill-rule="evenodd" clip-rule="evenodd"
               d="M16.06 0.590005L17.41 1.94C18.2 2.72 18.2 3.99 17.41 4.77L14.64 7.54L4.18 18H0V13.82L10.4 3.41L13.23 0.590005C14.01 -0.189995 15.28 -0.189995 16.06 0.590005ZM2 16L3.41 16.06L13.23 6.23005L11.82 4.82005L2 14.64V16Z"
               fill="#000"></path>
       </svg>
   </div>
   <div class="body">
       <div>hold the button to capure the images for train</div>
       <div class="icon dataCollector" data-1hot="${classNameIndex}" data-name="${className}">
           <svg class="sample-source-icon"  width="24" height="24" viewBox="0 0 24 24"
               fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill="#1967D2" fill-rule="evenodd" clip-rule="evenodd"
                   d="M18 6V10.48L22 6.5V17.5L18 13.52V14.52V18C18 19.1 17.1 20 16 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4H16C17.1 4 18 4.9 18 6ZM16 14.52V9.69V6H4V18H16V14.52Z">
               </path>
           </svg>
           <span>webcam</span>
       </div>
   </div>`
 }

