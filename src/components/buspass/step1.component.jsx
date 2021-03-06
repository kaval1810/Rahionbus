import React from 'react';
import CustomInput from '../customInput/customInput.component';
import './step1.styles.scss';
import isEmail from 'validator/lib/isEmail';
import isInt from 'validator/lib/isInt';
import shape5 from '../../shape/shape5.png';
import shape4 from '../../shape/shape4.png';

export class Step1 extends React.Component{
constructor() {
super();
this.state =  {

};
}

handelSubmit = e => {
e.preventDefault();
const {Enrollment,CollegeCode,BranchCode,Mobile,email} = this.props.values;
if (Enrollment.length < 12 || Enrollment.length > 12 )
{
	alert("enter a valid 12 digit Enrollment! ");
	return;
}
else if (CollegeCode.length < 4 || CollegeCode.length > 4)
{
	alert("enter a College Code of 4 digit");
	return;
}
else if (BranchCode.length < 2 || BranchCode.length > 2)
{

   if(BranchCode.value === 0)
	 {
			alert("Opps! Invalid Code, enter a valid Branch Code of 2 digit");
	 		return;
	 }
}
else if (!isInt(Mobile,{min : 1111111111, max: 9999999999}))
{
  alert("enter mobile_no of valid digits only");
  return;
}
else if (!isEmail(email))
{
	alert("enter email in valid form");
	return;
}
this.props.nextStep()
};


render() {
const { handleChange,values } = this.props;

return (

<div className='step1'>
	<span className='title'><h2>Personal Infomation</h2></span>
	<form className='form' onSubmit={this.handelSubmit}>
		<lable>FullName</lable>
		<CustomInput
		className='fullname'
		type='text'
		name='FullName'
		value={values.FullName}
		onChange={handleChange('FullName')}
		placeholder='Full Name'
		required
		/><br/>
	<lable>Enrollment No.</lable>
		<CustomInput
		className='enroll'
		type='number'
		name='Enrollment'
		value={values.Enrollment}
		onChange={handleChange('Enrollment')}
		placeholder='Enrollment No'
		required
		/><br/>
		<div className='college'>
			<lable>College Name</lable>
			<CustomInput
			className='collegename'
			type='text'
			name='CollegeName'
			value={values.CollegeName}
			onChange={handleChange('CollegeName')}
			placeholder='College Name'
			required
			/>
			<lable>College Code</lable>
			<CustomInput
			className='collegecode'
			type='number'
			name='CollegeCode'
			value={values.CollegeCode}
			onChange={handleChange('CollegeCode')}
			placeholder='College Code'
			required
			/>
		</div><br/>
		<div className='branch'>
			<lable>Branch</lable>
			<CustomInput
			className='branchname'
			type='text'
			name='BranchName'
			value={values.BranchName}
			onChange={handleChange('BranchName')}
			placeholder='Branch'
			required
			/>
			<lable>Branch Code</lable>
			<CustomInput
			className='branchcode'
			type='number'
			name='BranchCode'
			value={values.BranchCode}
			onChange={handleChange('BranchCode')}
			placeholder='Branch Code'
			required
			/>
		</div><br/>
		<div className='sem_mob'>
			<lable>Semister</lable>
			<select className='semister' value={values.Semister} onChange={handleChange('Semister')}>
    <option value='' >--Semister--</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
</select>
<lable>Mobile No.</lable>
			<CustomInput
			className='mobile'
			type='tel'
			maxlength='10'
			minlength='10'
			name='Mobile'
			value={values.Mobile}
			onChange={handleChange('Mobile')}
			placeholder='Mobile No.'
			required
			/>
		</div><br/>
		<lable>Email Address</lable>
		<CustomInput
		className='email'
		type='email'
		name='email'
		value={values.email}
		onChange={handleChange('email')}
		placeholder='example123@gmail.com'
		required
		/>
		<button className="button" >Next</button>
	</form>
  <img src={shape5} alt='shape' className='shape5'/>
  <img src={shape4} alt='shape' className='shape4'/>
</div>


);
}
}
export default Step1;
