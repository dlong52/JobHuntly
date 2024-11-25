import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';
import Select from 'react-dropdown-select';
import { CompanyFilter, CompanyList } from '../../components';
import address from '../../api/locationApi';

const AdminCompanyPage = () => {
    const [selectedValues, setSelectedValues] = useState([]);
    const [provincesData, setProvincesData] = useState([]);

    const handleSelect = (values) => {
        setSelectedValues(values);
    };

    useEffect(() => {
        const fetchProvincesData = async () => {
            const res = await address.fetchProvincesData();
            const formattedProvinces = res.map(province => ({
                label: province.province_name,  
                value: province.province_id     
            }));
            setProvincesData(formattedProvinces);
        };
        fetchProvincesData();
    }, []);

    return (
        <div className="">
            <div className="flex gap-6 mb-4 border p-6 bg-white rounded-lg">
                <div className="flex items-center gap-2 flex-1">
                    <MagnifyingGlassIcon className='w-6 text-gray-500' />
                    <input
                        type="text"
                        placeholder='Tên công ty hoặc từ khóa'
                        className='border-b border-gray-300 h-[45px] px-4 w-full focus:outline-none focus:border-blue-500 transition'
                    />
                </div>
                <div className="flex items-center gap-2">
                    <MapPinIcon className='w-6 text-gray-500' />
                    <Select
                        options={provincesData}  
                        onChange={handleSelect}
                        values={selectedValues}
                        multi={false}
                        placeholder="Tỉnh/Thành Phố"
                        style={{ width: '256px', height: '45px', border: 'none', borderBottom: '1px solid #d1d5db' }}
                        className='py-3 outline-none bo'
                    />
                </div>
                <button className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                    Tìm kiếm
                </button>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-2">
                    <CompanyFilter />
                </div>
                <div className="col-span-10">
                    <CompanyList />
                </div>
            </div>
        </div>
    );
};

export default AdminCompanyPage;
