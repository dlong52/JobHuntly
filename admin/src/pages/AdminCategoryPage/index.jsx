import React from 'react';

const AdminCategoryPage = () => {
  const categories = [
    {
      name: 'Thiết kế',
      jobCount: 100,
      status: true,
    },
    {
      name: 'Kế toán / Kiểm toán',
      jobCount: 100,
      status: true,
    },
    {
      name: 'Thiết kế',
      jobCount: 100,
      status: true,
    },
    {
      name: 'IT phần mềm',
      jobCount: 100,
      status: true,
    },
    {
      name: 'Giáo dục / Đào tạo ',
      jobCount: 100,
      status: true,
    },
    {
      name: 'Hành chính / Văn phòng',
      jobCount: 100,
      status: true,
    },
  ];

  return (
    <div className=" min-h-screen">
      <div className="bg-blue-950 rounded-md shadow-lg overflow-hidden">
        <table className="w-full text-left text-white">
          <thead>
            <tr>
              <th className="py-3 px-5">Lĩnh vực</th>
              <th className="py-3 px-5 text-center">Đang tuyển</th>
              <th className="py-3 px-5">Trạng thái</th>
              <th className="py-3 px-5">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr
                key={index}
                className="hover:bg-blue-800 transition duration-200"
              >
                <td className="py-3 px-5 border-b border-blue-900">{category.name}</td>
                <td className="py-3 px-5 border-b border-blue-900 text-center">
                  {category.jobCount}
                </td>
                <td className="py-3 px-5 border-b border-blue-900">
                  {category.status ? (
                    <span className="text-green-400">Hoạt động</span>
                  ) : (
                    <span className="text-red-400">Ngừng hoạt động</span>
                  )}
                </td>
                <td className="py-3 px-5 border-b border-blue-900">
                  <button className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 transition duration-200">
                    Cập nhật
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminCategoryPage;
