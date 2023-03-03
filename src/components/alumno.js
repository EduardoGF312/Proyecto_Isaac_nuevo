import '../App.css';
import pdf from '../files/CV.pdf';

function PDF(){
    return(
    <iframe src={pdf}></iframe>
    )
  }
export default PDF