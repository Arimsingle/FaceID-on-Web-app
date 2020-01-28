import styled from 'styled-components'
const Sign_up = (props) => {
    const Photo = styled.div`
    text-align:center;
    img{
        width: 32%;
    }
`;
    return (
        <div>
            <Photo>
            <img src="https://media1.tenor.com/images/ba5593b710e442badcff3cb7740c6d4f/tenor.gif?itemid=12321645"/>
                <h1>ทำการเข้าสู่ระบบแล้ว</h1>
            </Photo>
        </div>
    )
}
export default Sign_up;