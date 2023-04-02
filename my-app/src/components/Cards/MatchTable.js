import React from 'react';
import { UserCircleIcon,  CalendarIcon, HeartIcon, StarIcon, HomeIcon, ChatIcon, BellIcon } from '@heroicons/react/24/solid';


function MatchTable() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 p-6">
        <div className="w-full bg-white p-6 rounded-lg shadow-lg mb-6">
          <div className="flex items-center">
            <UserCircleIcon className="h-12 w-12 text-purple-500 mr-4" />
            <div>
              <h2 className="text-lg font-bold">小红</h2>
              <p className="text-sm text-gray-500">26岁，女，上海</p>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <div className="h-6 w-6 text-gray-400 mr-2" />
            <p>上海，浦东新区</p>
          </div>
          <div className="flex items-center mt-2">
            <CalendarIcon className="h-6 w-6 text-gray-400 mr-2" />
            <p>生日：1997年7月1日</p>
          </div>
          <div className="flex items-center mt-2">
            <HeartIcon className="h-6 w-6 text-gray-400 mr-2" />
            <p>单身</p>
          </div>
          <div className="flex items-center mt-2">
            <StarIcon className="h-6 w-6 text-yellow-400 mr-2" />
            <p>评分：4.5（100人评价）</p>
          </div>
        </div>
        <div className="w-full bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold mb-4">我想匹配的约会对象</h3>
          <table className="w-full">
            <tbody>
              <tr>
                <td className="font-bold py-2">性别</td>
                <td>男</td>
              </tr>
              <tr>
                <td className="font-bold py-2">年龄</td>
                <td>25-30岁</td>
              </tr>
              <tr>
                <td className="font-bold py-2">身高</td>
                <td>170-180cm</td>
              </tr>
              <tr>
                <td className="font-bold py-2">体型</td>
                <td>健康，体态匀称</td>
              </tr>
              <tr>
                <td className="font-bold py-2">教育程度</td>
                <td>本科或以上</td>
              </tr>
              <tr>
                <td className="font-bold py-2">职业</td>
                <td>金融、科技或创业</td>
              </tr>
              <tr>
                <td className="font-bold py-2">居住地</td>
                <td>上海市内</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
     )}

     export default MatchTable;