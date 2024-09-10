import React from "react";


const sections =[
    {
        title:'Soluciones',
        items:['Marketing','Analytics','Commerce','Data','Cloud']
    },
    {
        title:'Soporte',
        items:['Pricing','Documentation','Guides','API','Status']
    },
    {
        title:'Compañia',
        items:['About','Blog','Jobs','Press','Partners']
    }
    
]



const Footer =()=>{
    return(
        <>
        <div className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-2">
            <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
                {
                    sections.map((section,index)=>(
                        <div key={index}> 
                            <h6>
                                {section.title}
                            </h6>
                            <ul>
                                {section.items.map((item,i)=>(
                                    <li key={i} className="py-1 text-gray-500 hover:text-white cursor-pointer">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                }

            </div>
        </div>

        </>
    )
}
   
export default Footer;