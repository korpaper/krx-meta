const tabItem = document.querySelectorAll('.tab-item')
const tabInner = document.querySelectorAll('.tab-inner')

tabItem.forEach((tab, idx)=> {
    tab.addEventListener('click', function(){
        tabInner.forEach((inner)=> {
            inner.classList.remove('active')
        })

        tabItem.forEach((item)=> {
            item.classList.remove('active')
        })

        tabItem[idx].classList.add('active')
        tabInner[idx].classList.add('active')
    })
})

const mbTabItem = document.querySelectorAll('.mb-tab-item')
const mbTabInner = document.querySelectorAll('.tab-inner')

mbTabItem.forEach((tab, idx)=> {
    tab.addEventListener('click', function(){
        mbTabInner.forEach((inner)=> {
            inner.classList.remove('active')
        })

        mbTabItem.forEach((item)=> {
            item.classList.remove('active')
        })

        mbTabItem[idx].classList.add('active')
        mbTabInner[idx].classList.add('active')
    })
})

function collapse(element) {
    var before = document.getElementsByClassName("active")[0]               // 기존에 활성화된 버튼
    if (before && document.getElementsByClassName("active")[0] != element) {  // 자신 이외에 이미 활성화된 버튼이 있으면
        before.nextElementSibling.style.maxHeight = null;   // 기존에 펼쳐진 내용 접고
        before.classList.remove("active");                  // 버튼 비활성화
    }
    element.classList.toggle("active");         // 활성화 여부 toggle

    var content = element.nextElementSibling;
    if (content.style.maxHeight != 0) {         // 버튼 다음 요소가 펼쳐져 있으면
        content.style.maxHeight = null;         // 접기
    } else {
        content.style.maxHeight = content.scrollHeight + "px";  // 접혀있는 경우 펼치기
    }
}