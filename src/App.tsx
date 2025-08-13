
import { RouterProvider } from 'react-router-dom';
import { GlobalStyle } from './components/global-style/global-style';

// import router cho toàn bộ dự án
// kết nối với react tương tự kết nối với redux
import { router } from './route';




function App() {
 
  return <>
    <GlobalStyle>

        <RouterProvider router={router}/>

    </GlobalStyle>
  </>
}

export default App;
