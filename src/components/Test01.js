import Cat02 from '../assect/cat02.jpg';

 const src = './images/cat01.jpg';
 const alt= 'small cat'
 
export default function Test01(){
  return (
    <>
    <img src={src} alt={alt}/>
    <img src={Cat02}  alt=" small cat" />
    </>
  ) 
}