import React from "react";
import Pic from './../images/about - Copy.png'

const Home=()=>{
    return(<>


<div className ="container: bg-white-900">


<div className=" w-76 container mx-auto px-20: bg-gray-900">


    <div className="grid grid grid-flow-col auto">
      <img src={Pic} alt = "" className ="w-20 h-20 text-orange-500"/>
      <h2 className="text-orange-400  p-5 w-10 l-5  font-bold  text-5xl" > Restoran</h2>

  <div className="container  max-auto px-20">

<div className="flex">

<div className="p-8 text-orange-500 h-76 p-8 w-76  shadow hover:bg-orange-500 ">HOME</div>
<div className="p-8 text-white-rgb-255  text-slate-200 hover:text-white-800 shadow hover:bg-orange-500 " >ABOUT</div>
<div className="p-8 text-white-rgb-255  text-slate-200 hover:text-white-800 shadow hover:bg-orange-500 " >SERVICE</div>
<div className="p-8 text-white-rgb-255  text-slate-200 hover:text-white-800 shadow hover:bg-orange-500 " >MENU</div>
<div className="flex items-center justify-center">
  <div className="inline-flex shadow-ms hover:shadow-ms focus:shadow-ms text-white-rgb-255  text-slate-200 hover:text-white-800 shadow hover:bg-orange-500 "role="group"> PAGE
     <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="caret-down"
        className="w-2 ml-2"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"  >

<path fill="currentColor"d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
      </svg>
     <ul  className=" dropdown-menu min-w-max absolute hidden
        bg-white
        text-base
        z-50
        float-left
        py-2
        list-none
        text-left
        rounded-lg
        shadow-lg
        mt-1
        hidden
        m-0
        bg-clip-padding
        border-none
      "
      aria-labelledby="dropdownMenuButton9"
    >
      <li>
        <a
          className="
            dropdown-item
            text-sm
            py-2
            px-4
            font-normal
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          "
          href="#"
          >Boking</a >
      </li>
      <li>
        <a
          className=" dropdown-item"href="#">Aur team</a> </li>
      <li>
        <a  className=" dropdown-item"href="#" >testimonial</a > </li>
    </ul>
  </div> 
  </div>
 
<div className="p-8 text-white-rgb-255  text-slate-200 hover:text-white-800 shadow hover:bg-orange-500 " >CONTACT</div>
 <button type="bottom " className= " bg-orange-400 m-5 px-8 " ><a href="/login">Book Table</a></button >


</div>
</div>
</div>

<div className="flex ">
<div className="w-1/2">

<h6 className="text-6xl text-white-rgb-255  text-slate-200 hover:text-white-800 pb-8 p-20 font-bold ">Enjoy Our<br/>Delicious Meal </h6>

<p className=" text-white-rgb-255  text-slate-200 hover:text-white-800 text-2xl p-5   " > 
  <br/>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
  .<br/> Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, 
  <br/>sed stet lorem sit clita duo justo magna dolore erat amet </p>

 <a href="/login"><button type="bottom " className= " bg-orange-400 m-5 px-10 " >Book Table</button ></a> 
  
</div>
<div className="w-1/2">
<img src={Pic} alt="" className=" h-76 p-2 "/> 
</div>
</div>
</div>




<div className ="w-76 container mx-auto px-20: bg-w-800">


<div className="grid grid-cols-4 gap-4 flex-row-4  ">   

<div className= "bg-white shadow-md hover:bg-orange-500 mx-3 my-4 p-5">
  <img src= {Pic} />
 <p className="font-bold p-5"> Master Chefs </p>

  Diam elitr kasd sed  at elitr sed <br/>
  ipsum justo dolor sed clita  </div>

  <div className= "bg-white shadow-md hover:bg-orange-500 mx-3 my-4 p-5">

    <img src={Pic}/>
  <p className="font-bold p-5">Quality Food </p>
  
   Diam elitr kasd sed at elitr sed<br/>
   ipsum justo dolor sed clita amet diam</div>


   <div className= "bg-white shadow-md hover:bg-orange-500 mx-3 my-4 p-5">
    <img src={Pic}/>

  <p className="font-bold p-5">Online Order </p>
  
  Diam elitr kasd sed at elitr sed <br/>
  ipsum justo dolor sed clita amet diam</div>

  <div className= "bg-white shadow-md hover:bg-orange-500 mx-3 my-4 p-5">
    <img src={Pic}/>
  <p className="font-bold p-5">24/7 Service </p>


Diam elitr kasd sed at elitr sed ipsum justo<br/>
   dolor sed clita amet diam</div>
    </div> 
  </div>
</div>





<div className="flex">
<div className="w-76 container mx-auto px-20 : bg-white-500">
<div className="w-1/2">
<div className=" row -g-3">
  <div className="flex   ">

    <img className=" p-3" src={Pic} alt="" width="" height=""/>
    <img className="w-56 m-3" src={Pic} alt="" width="" height=""/>
    </div>
  
  
    <div className=" flex ">
    <img className="w-56 m-3"   src={Pic}alt=""width="" height=""/>
    <img className=" p-3" src={Pic}alt=""width="" height=""/>
  </div>
</div> 
</div>
</div>
</div>
<div className="w-76 container mx-auto px-20 : bg-white-500">

<div className="p-8">

<h2 className="text-yellow-200 h-30 p-5 w-10 font-bold fst-italic " >About us </h2>
<p className="text-bg-gray-500 font-bold text-4xl"> Welcome to Restoran</p>

<p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
 Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.

 Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. <br/>
Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, 
sed stet lorem sit clita duo justo magna dolore erat amet</p>

</div>
<div className="flex row-g-4 ">
<div className="w-1/2 p-8">
<div className="border-l-4 border-orange-300 my-4 ">
<div>
  <h2 className="flex-display-5 text-orange-300 text-2xl  font-bold ">15</h2>
  <div className="ps-5">
   <p className="mb">Years of</p>
   <h2 className="text font-bold mb-2"> EXPERIENCE</h2>
  </div>
</div>
   <div className="p-2">
   <button type="bottom " className= " bg-orange-300 m-4 px-10 p-3" >Book Table</button > 
   </div>
  
 
 </div>
 </div>


<div className="w-1/2 p-8">

<div className="border-l-4 border-orange-300 my-4">
  <h2 className="flex- display-5 text-orange-300  text-2xl font-bold">50</h2>
<div className="ps-5">
  <p className="mb">popular</p>
  <h2 className="font-bold mb-2 ">MASTER CHEFS</h2>
</div>
</div>
</div>
<div className=" p-8 w-20">



</div>
</div>
</div>




<div className= "w-76 container mx-auto px-20 p-8">

<div className="x-flex align-items-center">
<div className="line-r-10 line-orange-500">
<h2 className=" italic text-center text-yellow-500 text-2xl font-bold  ">Food Menu</h2>
</div>
<p className=" text-4xl text-center font-bold">Most Popular Items</p>
<div className=" text-center p-5 w-76">


  <div className="  flex ml-72">
    
    <img className="" src={Pic} />

    <div className="w-100  flex-column  p-3">
        <h2 className="flex  w-32">
          <p className="">Popular<br/> Breakfast</p> 
        </h2>
       
    </div>

    <div className="  flex">
      <img className="" src={Pic} />

      <div className="w-100  flex-column  p-3">
          <h5 className="flex w-32">
            <p className="">Special<br/> Lunch</p> 
          </h5>
         
      </div>
    
      <div className="  flex">
        <img className="" src={Pic} />
  
        <div className="w-100  flex-column  p-3">
            <h5 className="flex w-32">
              <p className="">Lovely<br/> Dinner</p> 
            </h5>
        </div>
       </div>                      
</div></div>
</div>
</div>
</div>


<div className= "w-76 container mx-auto px-20">

<div className=" flex flex-wrap">
<div className="w-1/2">
  <div className="flex">
   <div className="w-1/6 p-3">
     <img src={Pic}/>
   </div>
   <div className="w-4/6">
    <p className="font-bold border-1 border-bg-gray-500 ">Chicken burger</p>

    <small className="pb-8 ">Ipsum ipsum clita erat amet dolor justo diam</small>
  </div>
  <div className="w-1/6">
    <p className="font-bold border-1 border-bg-yellow-500 ">£115</p>
  </div>
</div>
</div>

<div className="w-1/2">
  <div className="flex">
   <div className="w-1/6 p-3">
     <img src={Pic}/>
   </div>
   <div className="w-4/6">
    <p className="font-bold border-1 border-bg-gray-500">Chicken burger</p>
    <small className="pb-8">Ipsum ipsum clita erat amet dolor justo diam</small>
  </div>
  <div className="w-1/6"> 
    <p className="font-bold border-1 border-text-orange-600 ">£115</p>
  </div>
</div>
</div>


<div className="w-1/2">
  <div className="flex">
   <div className="w-1/6 p-3">
     <img src={Pic}/>
   </div>
   <div className="w-4/6">
    <p className="font-bold border-1 border-bg-gray-500">Chicken burger</p>
    <small className="pb-8">Ipsum ipsum clita erat amet dolor justo diam</small>
  </div>
  <div className="w-1/6"> 
    <p className="font-bold border-1 border-text-orange-600 ">£115</p>
  </div>
</div>
</div>

<div className="w-1/2">
  <div className="flex">
   <div className="w-1/6 p-3">
     <img src={Pic}/>
   </div>
   <div className="w-4/6">
    <p className="font-bold border-1 border-bg-gray-500">Chicken burger</p>
    <small className="pb-8">Ipsum ipsum clita erat amet dolor justo diam</small>
  </div>
  <div className="w-1/6"> 
    <p className="font-bold border-1 border-text-orange-600 ">£115</p>
  </div>
</div>
</div>


<div className="w-1/2">
  <div className="flex">
   <div className="w-1/6 p-3">
     <img src={Pic}/>
   </div>
   <div className="w-4/6">
    <p className="font-bold border-1 border-bg-gray-500">Chicken burger</p>
    <small className="pb-8">Ipsum ipsum clita erat amet dolor justo diam</small>
  </div>
  <div className="w-1/6"> 
    <p className="font-bold border-1 border-text-orange-600 ">£115</p>
  </div>
</div>
</div>

<div className="w-1/2">
  <div className="flex">
   <div className="w-1/6 p-3">
     <img src={Pic}/>
   </div>
   <div className="w-4/6">
    <p className="font-bold border-1 border-bg-gray-500">Chicken burger</p>
    <small className="pb-8">Ipsum ipsum clita erat amet dolor justo diam</small>
  </div>
  <div className="w-1/6"> 
    <p className="font-bold border-1 border-text-orange-600 ">£115</p>
  </div>
</div>
</div>

<div className="w-1/2">
  <div className="flex">
   <div className="w-1/6 p-3">
     <img src={Pic}/>
   </div>
   <div className="w-4/6">
    <p className="font-bold border-1 border-bg-gray-500">Chicken burger</p>
    <small className="pb-8">Ipsum ipsum clita erat amet dolor justo diam</small>
  </div>
  <div className="w-1/6"> 
    <p className="font-bold border-1 border-text-orange-600 ">£115</p>
  </div>
</div>
</div>


<div className="w-1/2">
  <div className="flex">
   <div className="w-1/6 p-3">
     <img src={Pic}/>
   </div>
   <div className="w-4/6">
    <p className="font-bold border-1 border-bg-gray-500">Chicken burger</p>
    <small className="pb-8">Ipsum ipsum clita erat amet dolor justo diam</small>
  </div>
  <div className="w-1/6"> 
    <p className="font-bold border-1 border-text-orange-600 ">£115</p>
  </div>
</div>
</div>
</div>
</div>






<div className= "w-76 container mx-auto px-20">

<div className="flex">
<div className="w-1/2">
<img src={Pic}alt="" className="w-full h-full  "/> 
</div>

<div className="w-1/2 bg-gray-900 p-2">
<h1 className="font-italic font-bold text-center italic text-center text-yellow-500 text-2xl font-bold ">Reservation</h1>
<p  className="font-italic font-bold text-center text-white-rgb-255   text-slate-200 hover text-5xl ">Book A Table Online </p>
<form />
{/* form start */}
<div className="flex p-2">
  <div className="w-1/2">
    <input className="border-2 border p-3" type="text" placeholder="your names"/>
  </div>
  <div className="w-1/2">
    <input className="border-2  p-3" type="text" placeholder="your Email"/>
  </div>
</div>
<div className="flex p-2">
  <div className="w-1/2">
    <input className="border-2 p-3" type="text" placeholder="Date&time"/>
  </div>
  <div className="w-1/2 flex" >
  
    <select className="border-2  p-3 w-56" type="text" placeholder="No of peaple">
       <option> peaple 1</option>
       <option> peaple 1</option>
    </select>
  </div>
</div>
<input className="w-full h-30"/> Special request
  </div>
</div>
</div>




<div className= "w-76 container mx-auto px-20">
  <div className="d-flex align-items-center p-8">
<div className="line-r-10 line-orange-500">
  <h5 className=" italic text-center text-yellow-500 text-2xl font-bold  ">Team Members</h5>
</div>
  <p className=" text-4xl text-center font-bold">Our Master Chefs</p>


  <div className ="w-76 container mx-auto px-20: bg-w-800">

    <div className="grid grid-cols-4 gap-4 flex-row-4  ">   
    
      <div className= "bg-white shadow-md hover:bg-white-255 mx-3 my-4 p-5">
        <img src={Pic}/>
       <h1 className="font-bold p-5"> Full Name 
     Desingation</h1>
     </div>
    
        <div className= "bg-white shadow-md hover:bg-white-255 mx-3 my-4 p-5">
    
          <img src="./team-2.jpg"/>
        <h1 className="font-bold p-5">Full Name Designation</h1> 
        
        </div>
    
    
         <div className= "bg-white shadow-md hover:bg-white-255 mx-3 my-4 p-5">
          <img src={Pic}/>
    
        <p className="font-bold p-5">Full name
          Desingation </p>
        </div>
    
        <div className= "bg-white shadow-md hover:bg-white-255 mx-3 my-4 p-5">
          <img src={Pic}/>
        <p className="font-bold p-5">Full Name Desingation </p>
    </div>
          </div> 
        </div>
      </div>
</div>


<div className ="w-76 container mx-auto px-20: bg-w-800">

<h5 className=" italic text-center text-yellow-500 text-2xl font-bold  ">Testimonial</h5>
</div>
<p className=" text-4xl text-center font-bold">Our Clients Say!!!</p>

  <div className="grid grid-cols-4 gap-4 flex-row-4  ">   
  
    <div className= "bg-white shadow-md hover:bg-orange-500 mx-3 my-4 p-5">
      <img src={Pic}/>
     
    <p> Diam elitr kasd sed  at elitr sed 
      ipsum justo dolor sed clita Diam elitr kasd sed at elitr sed
      ipsum justo dolor sed clita amet diam </p>  
      <img src={Pic}/>
      <p className="font-bold p-5"> Client Name </p>

      <small className="p-5 w-20">Profession</small>

    </div>

    <div className= "bg-white shadow-md hover:bg-orange-500 mx-3 my-4 p-5">
      <img src={Pic}/>
     
    <p> Diam elitr kasd sed  at elitr sed 
      ipsum justo dolor sed clita Diam elitr kasd sed at elitr sed
      ipsum justo dolor sed clita amet diam </p>  
      <img src={Pic}/>
      <p className="font-bold p-5"> Client Name </p>

      <small className="p-5 w-20">Profession</small>

    </div>


    <div className= "bg-white shadow-md hover:bg-orange-500 mx-3 my-4 p-5">
      <img src={Pic}/>
     
    <p> Diam elitr kasd sed  at elitr sed 
      ipsum justo dolor sed clita Diam elitr kasd sed at elitr sed
      ipsum justo dolor sed clita amet diam </p>  
      <img src={Pic}/>
      <p className="font-bold p-5"> Client Name </p>

      <small className="p-5 w-20">Profession</small>

    </div>



    <div className= "bg-white shadow-md hover:bg-orange-500 mx-3 my-4 p-5">
     
        <img className="img-fluid rounded-lg " src="img/team-1.jpg" alt=""/>
      
      <img src={Pic}/>
     
    <p> Diam elitr kasd sed  at elitr sed 
      ipsum justo dolor sed clita Diam elitr kasd sed at elitr sed<br/>
      ipsum justo dolor sed clita amet diam </p>  
      <img src={Pic}/>
      <p className="font-bold p-5"> Client Name </p>

      <small className="p-5 w-20">Profession</small>

    </div>

  </div> 


    <div className ="w-76 container mx-auto px-20: bg-gray-800">

  <div className="flex">
      <div className=" ms-3">
          <h1 className= "  text-yellow-600  font-bold ">Campany</h1>
         <p><i className="mb-0  text-white-rgb-255  text-slate-200 hover:text-white-800 	fas fa-angle-left" >About us</i></p> 
        
         <p><i className="mb-0  text-white-rgb-255  text-slate-200 hover:text-white-800  	fas fa-angle-left"> Contact us</i></p>
         <p><i className="mb-0  text-white-rgb-255  text-slate-200 hover:text-white-800 	fas fa-angle-left "> Reservation</i></p>
        <p><i className="mb-0  text-white-rgb-255  text-slate-200 hover:text-white-800 	fas fa-angle-left "> Privacy policy</i></p>
       <p><i className="mb-0  text-white-rgb-255  text-slate-200 hover:text-white-800 	fas fa-angle-left "> Terms & Condition</i></p>
          </div>

          </div>

      <div className="x-flex align-items-center  ">
          <h1 className= "font-italic text-yellow-600    ">contact</h1> 
         <p className=""> <i className=" fa fa-map-marker-alttext-white-rgb-255  text-slate-200 hover:text-white-600  text-base "> 23 Street, New York, USA </i></p>
         <p className=""><i className="fa fa-phone-alt  text-white-rgb-255  text-slate-200 hover:text-white-800 text-base "> +012 345 67890 </i></p> 

        <p className=""><i className="fa fa-envelope text-white-rgb-255  text-slate-200 hover:text-white-800 text-base">info@example.com </i></p>
         
          <div className="d-flex pt-1 text-center inline-flex">
           <p><a className="btn btn-outline-light btn-social " ></a><i className=" text-white-rgb-255  text-slate-200 hover:text-white-800  fab fa-twitter"></i><a/> </p> 
           <p> <a className="btn btn-outline-light btn-social  "></a><i className=" text-white-rgb-255  text-slate-200 hover:text-white-800  fab fa-facebook-f"></i><a/> </p> 
           <p>  <a className="btn btn-outline-light btn-social  "></a> <i className= "text-white-rgb-255  text-slate-200 hover:text-white-800  fab fa-youtube"></i><a/></p> 
           <p> <a className="btn btn-outline-light btn-social  " ></a><i className=" text-white-rgb-255  text-slate-200 hover:text-white-800  fab fa-linkedin-in"></i><a/></p> 
        </div>
      </div>

      <div className=" x-flex align-items-center p-3 ">
          <h1 className= " font-italic text-yellow-600   ">Opening</h1> 
          <p className=" text-white-rgb-255  text-slate-200 hover:text-white-800  "> Monday - Saturday </p>
          <p className="  text-white-rgb-255  text-slate-200 hover:text-white-800  "> 09AM - 09PM</p>
          <p className=" text-white-rgb-255  text-slate-200 hover:text-white-800  "> Sunday </p>
          <p className=" text-white-rgb-255  text-slate-200 hover:text-white-800  ">10AM - 08PM  </p>
      </div>


      <div className="  x-flex align-items-center p-3  ">
      <div className= "font-bold line-1 line-bg-gray-500"> 
          <h1 className= " font-italic text-yellow-600 font-bold   ">Newletter</h1> 
          <p className="mb-0  text-white-rgb-255  text-slate-200 hover:text-white-800 ">Dolor amet sit justo amet elitr clita  ipsum elitr est.</p>
            <input className="border-2 p-3" type="text" placeholder="your Email"/>

      </div>
    </div> 
   </div> 

   <div className=" flex">
    <p className="mb-0 text-white-rgb-255 text-slate-200 hover:text-white-800 p-2"> Your Site Name, All Right Reserved. Designed By HTML Codex </p>
    <p className="mb-0 text-white-rgb-255 text-slate-200 hover:text-white-800 p-2"> Distributed By ThemeWagon </p>
   </div>

   <div className="w-1/2  p-2 ">
   <div className="  flex inline-block">
       <i className="mb-0 text-white-rgb-255 text-slate-200 hover:text-white-800 p-2"/>



       <p className="mb-0 text-white-rgb-255 text-slate-200 hover:text-white-800 ">Cookies </p>
       <p className="mb-0 text-white-rgb-255 text-slate-200 hover:text-white-800 ">Help </p>
       <p className="mb-0 text-white-rgb-255 text-slate-200 hover:text-white-800 "> FQAs </p>
   </div>
       </div>
  

</>)
}


export default Home
