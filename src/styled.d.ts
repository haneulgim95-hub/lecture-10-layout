// d.ts 파일
// 타입스크립트 엔진에게 타입(자료형)을 재지정 등을 통해 알려주기 위해 존재하는 파일
// styled-components라고 하는 라이브러리에 이미 있는 타입을 재지정해주기 위해 생성
// d.ts파일은 프로젝트가 시작할 때 자동으로 로딩하여 구동함
// import를 해주지 않으면 styled-components 전체가 재지정됨
import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        color: {
            background: string;
            text: string;
            primary: string;      // 사이트의 메인 색상
            muted: string;
        }
    }
}

// 왜 원래 있던 태입을 재지정해서 쓰나??
// => 이미 styled-components가 제공하고 있는 기능이 저 DefaultTheme를 기반으로 제공하고 있기 때문
// => styled-components의 메소드(기능)가 매개변수로 DefaultTheme를 받도록 강제하고 있기 때문에,
// 우리는 DefaultTheme를 우리 입맛에 맞게끔 바꿔서 쓸 수 밖에 없다.
