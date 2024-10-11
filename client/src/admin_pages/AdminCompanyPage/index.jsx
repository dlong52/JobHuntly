import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import Select from 'react-dropdown-select';
import { CompanyFilter, CompanyList } from '../../components';

const AdminCompanyPage = () => {
    const [selectedValues, setSelectedValues] = useState([]);

    const options = [
        { label: 'IT', value: 'it' },
        { label: 'Healthcare', value: 'healthcare' },
        { label: 'Education', value: 'education' },
        { label: 'Business', value: 'business' },
        { label: 'Construction', value: 'construction' }
    ];

    const handleSelect = (values) => {
        setSelectedValues(values);
    };

    return (
        <div className="p-6 bg-white border rounded-lg">
            <div className="flex gap-6 mb-4">
                <div className="flex items-center gap-3 flex-1">
                    <MagnifyingGlassIcon className='w-5 text-gray-500' />
                    <input
                        type="text"
                        placeholder='Tên công ty hoặc từ khóa'
                        className='border border-gray-300 rounded-lg h-[45px] px-4 w-full focus:outline-none focus:border-blue-500 transition'
                    />
                </div>
                <div className="flex items-center gap-3 flex-1">
                    <MapPinIcon className='w-5 text-gray-500' />
                    <Select
                        options={options}
                        onChange={handleSelect}
                        values={selectedValues}
                        multi={false}
                        placeholder="Tỉnh/Thành Phố"
                        className='w-full border-b h-[45px] border-gray-300 rounded-lg py-3 px-4 outline-none focus:border-blue-500 transition'
                    />
                </div>
                <button className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                    Tìm kiếm
                </button>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-4">
                    <CompanyFilter />
                </div>
                <div className="col-span-8">
                    <CompanyList/>
                </div>
            </div>
        </div>
    );
};

export default AdminCompanyPage;
