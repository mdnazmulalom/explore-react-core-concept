export default function Resume({cv}){
 console.log(cv);
 return(
    <div>
        <h1>THIS IS CV SECTION</h1>
        <h3>Name: {cv.name} </h3>
        <h3>Experience Year: {cv.experienceYear}</h3>
        <h3>Previous Company Name:{cv.PreviousCompanyName} </h3>
    </div>
 )
} 