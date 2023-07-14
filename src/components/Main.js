const people = {
  no01 : 'Lee',
  no02 : 'Kim',
  no03 : 'Park'
}

export default function Main(){
  return (
    <>
    <ol className="list">
      <li>{people.no01}</li>
      <li>{people.no02}</li>
      <li>{people.no03}</li>
    </ol>
    <p>리스트이름</p>
    </>
  )
}