import { Search } from 'lucide-react';
import './SearchBar.scss';
export default function SearchBar() {
    return (
        <div className='input-wrapper max-sm:w-[100%] max-md:w-[60%] w-[40%] flex flex-row items-center space-x-2 ring-1 ring-white '>
            <Search color="#FFFFFF"/>
            <input type="text" placeholder="Search for product/treatment" className='input' />
        </div>
    )
}