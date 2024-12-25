const container = document.createElement('div');
container.setAttribute('id', 'blue_container');
container.style.backgroundColor = 'blue';
container.style.width = '800px';
container.style.height = '200px';
container.style.display = 'flex';
container.style.gap = '10px';
container.style.alignItems = 'center'; // 수직 중앙 정렬
container.style.justifyContent = 'center'; // 수평 중앙 정렬
document.body.appendChild(container);

// DocumentFragment 생성
const fragment = document.createDocumentFragment();

for (let i = 0; i <= 6; i++) {
    const div = document.createElement('div');
    div.setAttribute("id", `a${i}`);
    div.setAttribute("class", `a`);
    div.style.backgroundColor = 'red';
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.fontSize = '40px';
    div.style.display = 'flex';
    div.style.alignItems = 'center'; // 수직 중앙 정렬
    div.style.justifyContent = 'center'; // 수평 중앙 정렬
    div.textContent = `${i}`;
    
    // Fragment에 추가
    fragment.appendChild(div);
}

// Fragment를 container에 한 번에 추가
container.appendChild(fragment);

document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.height = '100vh'
document.body.style.alignItems = 'center';
document.body.style.justifyContent = 'center';

const shiftButton = document.createElement('button');
document.body.appendChild(shiftButton);
shiftButton.textContent = 'shift 버튼';


const unshiftButton = document.createElement('button');
document.body.appendChild(unshiftButton);
unshiftButton.textContent = 'unshift 버튼';

shiftButton.addEventListener('click', arrayShift);


let isShifted = false; // 상태를 추적하는 변수

function arrayShift() {
    if (!isShifted) {
        // 요소를 제거
        let a = container.lastElementChild;
        container.removeChild(a);

        // 상태 업데이트
        shiftButton.textContent = '되돌리기';
        isShifted = true;

        // 제거된 요소를 저장해 둠
        shiftButton.removedElement = a;
    } else {
        // 되돌리기 동작
        if (shiftButton.removedElement) {
            container.appendChild(shiftButton.removedElement);
            shiftButton.removedElement = null;
        }

        // 상태 초기화
        shiftButton.textContent = 'shift 버튼';
        isShifted = false;
    }
}
