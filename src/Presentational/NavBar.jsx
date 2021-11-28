import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faCog} from '@fortawesome/free-solid-svg-icons'
import { faRedoAlt} from '@fortawesome/free-solid-svg-icons'
export default function NavBar() {
    return (
        <nav className="nav border-b-2 mb-2 items-center ">
        <div> 
            <div className="flex">
                <div className="hover:rounded-full hover: hover:bg-gray-200 cursor-pointer">
                    <FontAwesomeIcon icon={faBars} className="text-2xl m-5" />
                </div>
                <div className="mt-4">
                     <img src="https://tinyurl.com/4hryhnhh"/>
                </div>
            <h1 className="text-2xl font-bold mt-3">Keep Clone</h1>
            </div>
            <div className="flex top-0 right-0 absolute pr-10">
                <div className="hover:border-4 hover:rounded-full  hover: hover:bg-gray-200 cursor-pointer">
                    <FontAwesomeIcon icon={faCog} className="text-2xl m-5 object-none object-right" />
                </div>
                
                <div className="hover:rounded-full hover: hover:bg-gray-200 cursor-pointer">
                    <FontAwesomeIcon icon={faRedoAlt} className="text-2xl m-5" />
                </div>
                <div className="mt-4">
                        <img src="https://tinyurl.com/2p9b3jbd" className=" rounded-full"/>
               </div>
            </div>
        </div> 
        </nav>
    )
}
