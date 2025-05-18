import profileImg from './ChatGPT Image Mar 29, 2025, 02_11_44 AM.png';
function ProfilePic(){

    const handle=(e)=> e.target.style.display="none"
    return(
        <img  onClick={(e)=>handle(e)} src={profileImg}  />
    )
}
export default ProfilePic