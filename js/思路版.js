(function (window) {
  window.niubi = function ({
    id, data
  }) {
    let ul = document.createElement('ul');
    let count = 0;
    ul.setAttribute('id', 'main');
    data.forEach((item, index) => {
      let li = document.createElement('li');
      let p = document.createElement('p');
      p.setAttribute('class', 'iconfont clickp');
      if (item.children.length != 0) {
        p.innerHTML = item.title + '<i class="iconfont">&#xe62d;</i>';
      } else {
        p.innerHTML = item.title;
      }
      li.appendChild(p);

      function xunhuan(item) {
        if (item.children && item.children.length > 0) {
          let ul = document.createElement('ul');
          ul.setAttribute('class', 'son' + (++count))
          item.children.forEach((item) => {
            let li = document.createElement('li');
            let p = document.createElement('p');
            p.setAttribute('class', 'iconfont clickp');
            if (item.children.length != 0) {
              p.innerHTML = item.title + '<i class="iconfont">&#xe62d;</i>';
            } else {
              p.innerHTML = item.title;
            }
            li.appendChild(p);
            ul.appendChild(li);
            if (item.children && item.children.length > 0) {
              let uls = xunhuan(item);
              li.appendChild(uls);
            }
          })
          return ul;
        }
      }


      let uls = xunhuan(item);
      if (uls) {
        li.appendChild(uls);
      }
      ul.insertBefore(li, ul.children[index]);
    })
    let box = document.querySelector(id);
    box.appendChild(ul);

    let count = 0;
    function render(data) {
      if (data && data.length > 0) {
        let ul = document.createElement('ul');
        data.forEach((item) => {
          let li = document.createElement('li');
          let p = document.createElement('p');
          p.setAttribute('class', 'iconfont clickp'+(count++));
          if (item.children.length != 0) {
            p.innerHTML = item.title + '<i class="iconfont">&#xe62d;</i>';
          } else {
            p.innerHTML = item.title;
          }
          li.appendChild(p);
        })
      }
    }
    let clickp = document.querySelectorAll('.clickp');
    clickp.forEach((item) => {
      item.flag = true;
      item.onclick = function () {
        if (this.nextElementSibling == null) {
          return;
        } else {
          if (this.flag) {
            this.nextElementSibling.style.display = 'block';
            let length = this.nextElementSibling.children.length;
            this.parentNode.style.height = length * 40 + 50 + 'px';
            this.children[0].style.transform = 'rotate(180deg)';
          } else {
            this.nextElementSibling.style.display = 'none';
            this.parentNode.style.height = '50px';
            this.children[0].style.transform = 'rotate(0deg)';
          }
          this.flag = !this.flag;
        }
      }
    })
  }
})(window)