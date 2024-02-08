// import { useState } from 'react'
// import phoneStor from '../../stores/phoneStor';
// import './Form.css'

// function AddMeeting() {
//     const [formPerson, setFormPerson] = useState({
//         name: '',
//         city: '',
//         phone: '',
//     })

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         phoneStor.addPhone(formPerson)
//         setFormPerson({
//             name: '',
//             city: '',
//             phone: '',
//         })
//         //console.log(formPerson);//הדפסה של הסטייט
//        console.log(phoneStor.phoneList);
//     }

//     const handleChange = (event) => {//קורה רק על input אחד, כל פעם זה שהפעיל אותו
//         const { name, value } = event.target;
//         setFormPerson({ ...formPerson, [name]: value });//עדכון של הסטייט
//     }
//     return (
//         <div className="form">
//             <form onSubmit={handleSubmit} className='state'>
//                 <label>
//                     shem:
//                     <input type='text' name='shem' value={formPerson.name} onChange={handleChange} />
//                 </label>
//                 <br />
//                 <label>
//                     city:
//                     <input type='text' name='city' value={formPerson.city} onChange={handleChange} />
//                 </label>
//                 <br />
//                 <label>
//                     phone:
//                     <input type='text' name='phone' value={formPerson.phone} onChange={handleChange} />
//                 </label>
//                 <br />
//                 <button type='submit'>הוסף איש קשר</button>
//             </form>
//         </div>
//     )
// }

// export default AddMeeting
