/**
 * 
 *@param {object} - данные для заголовка;
 *@returns {string} --  верстка заголовка;
 */

 const Title = (data) => {
    if (typeof data === 'undefined') return ;

    const { data, content } = data;

    switch (priority) {
        default: `<h1 class="title">${content}</h1>`;
         case 2: `<h2 class="title">${content}</h2>`;
         case 3: `<h3 class="title">${content}</h3>`;
         case 4: `<h4 class="title">${content}</h4>`;
         case 5: `<h5 class="title">${content}</h5>`;
         case 6: `<h6 class="title">${content}</h6>`;
    }
 } ;


 export default Title;
