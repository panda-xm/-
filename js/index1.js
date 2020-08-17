(function (window) {
  function render(data,count=0) {
    if (data && data.length > 0) {
      let ul = document.createElement('ul');
      count++;
      data.forEach((item) => {
        let li = document.createElement('li');
        let p = document.createElement('p');
        p.setAttribute('class', 'iconfont clickp'+count);
        if (item.children && item.children.length > 0) {
          p.innerHTML = item.title + '<i class="iconfont">&#xe62d;</i>';
          let uls = render(item.children,count);
          li.appendChild(p);
          li.appendChild(uls);
        } else {
          p.innerHTML = item.title;
          li.appendChild(p);
        }
        ul.appendChild(li);
      })
      ul.setAttribute('class','main'+count)
      return ul;
    }
  }
  function renderz(id,data) {
    let ul = render(data,0);
    let = box = document.querySelector("#" + id);
    box.addEventListener('click', function (e) {
      let that = e.target;
      if (that.nodeName === 'I') {
        that = that.parentNode;
      }
      if (that.nextElementSibling == null) {
        return;
      } else {
        if (that.nextElementSibling.style.display == '' || that.nextElementSibling.style.display == 'none' ) {
          that.nextElementSibling.style.display = 'block';
          that.children[0].style.transform = 'rotate(180deg)';
        } else {
          that.nextElementSibling.style.display = 'none';
          that.children[0].style.transform = 'rotate(0deg)';
        }
      }
    })  
    box.appendChild(ul);
  }
  window.renderz= renderz;
})(window)