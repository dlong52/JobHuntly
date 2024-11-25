import React from 'react';

// Dữ liệu người dùng mẫu (bạn có thể thay đổi theo dữ liệu thực tế của mình)
const users = [
  { id: 1, name: 'Nguyễn Văn A', email: 'vana@example.com', status: true },
  { id: 2, name: 'Trần Thị B', email: 'thib@example.com', status: false },
  { id: 3, name: 'Lê Văn C', email: 'vanc@example.com', status: true },
  // Thêm người dùng khác ở đây
];

const AdminUserPage = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-blue-950 rounded-md shadow-lg overflow-hidden">
        <table className="w-full text-left text-white">
          <thead>
            <tr>
              <th className="py-3 px-5">Tên người dùng</th>
              <th className="py-3 px-5">Email</th>
              <th className="py-3 px-5">Trạng thái</th>
              <th className="py-3 px-5">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-blue-800 transition duration-200"
              >
                <td className="py-3 px-5 border-b border-blue-900">{user.name}</td>
                <td className="py-3 px-5 border-b border-blue-900">{user.email}</td>
                <td className="py-3 px-5 border-b border-blue-900">
                  {user.status ? (
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

export default AdminUserPage;
