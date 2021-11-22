import React from 'react';
import { Suspense } from 'react';



/* ------------------------------- React.lazy ------------------------------- */
// React.lazy는 컴포넌트를 렌더링하는 시정에서 비동기적으로 로딩할 수 있게 해 주는 유틸 함수이다.


// 예시 코드
const SplitMe = React.lazy(() => import('./SplitMe'));


/* -------------------------------- Suspense -------------------------------- */
// Suspense는 리액트 내장 컴포넌트로서 코드 스플리팅된 컴포넌트를 로딩하도록 발동시킬 수 있다.
// 로딩이 끝나지 않았을 때 보여줄 UI를 설정할 수 있다.

// 예시 코드
<Suspense fallback={<div>loading...</div>}> {/* fallback props를 통해 로딩 중에 보여 줄 JSX를 지정할 수 있다. */}
    <SplitMe />
</Suspense>
