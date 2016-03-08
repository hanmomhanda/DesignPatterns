'use strict'
// 탐색기 아이템(파일, 폴더 등)의 부모가 되는 Component
class Component {
    // JavaScript에서는 부모의 메서드를 override하도록
    // 강제할 수 있는 방법이 없다.
    // 따라서 override 안된 경우 강제로 에러 처리
    constructor(name) { // 생성자는 default parameter 쓸 수 없음
        this.name = name;
    }

    getValue() {
        throw Error("This method should be overridden");
    }
}

// 탐색기의 말단 파일 역할을 하는 Leaf
class Leaf extends Component {
    constructor(name) {
        super(name);
    }

    getValue() {
        return `(${this.name})`;
    }
}

// 탐색기의 폴더 역할을 하는 Composite
class Composite extends Component {
    constructor(name) {
        super(name);
        this.components = new Set();
    }

    add(component) {
        this.components.add(component);
        return this;
    }

    getValue() {
        let result = `${this.name} :[`;
        let i = 0;
        let len = this.components.size;
        for (let component of this.components) {
            result += component.getValue();
            if(i++ < len -1) result += ',';
        }
        result += ']';
        return result;
    }
}

// 탐색기의 바로가기 역할을 하는 Link (나중에 추가)
//class Link extends Component {
//    constructor(name) {
//        super(name);
//    }
//
//    getValue() {
//        return `~${this.name}`;
//    }
//}
(() => {
    let leaf1 = new Leaf('leaf1');
    let leaf2 = new Leaf('leaf2');
    let leaf3 = new Leaf('leaf3');
    let leaf4 = new Leaf('leaf4');

    // var link1 = new Link('link1');

    let composite1 = new Composite('composite1');
    let composite2 = new Composite('composite2');

    let composite3 = new Composite('composite3');

    composite1.add(leaf1).add(leaf2);
    // composite1.add(link1);
    composite2.add(leaf3).add(leaf4);

    composite3.add(leaf1)
        .add(composite1)
        .add(leaf2)
        .add(leaf3)
        .add(composite2)
        .add(leaf4);

    // 탐색기에 폴더와 파일 외에
    // 바로가기라는 새로운 아이템이 추가되어도
    // 아래의 코드는 변경할 필요가 없다.
    let result = composite3.getValue();

    console.log(result);
})();

