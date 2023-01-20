// // import { DownOutlined  } from '@ant-design/icons';
// // import { Menu } from 'antd';
// import { useState } from 'react';
// const items = [

//   {
//     label: 'CATEGORIES',
//     key: 'SubMenu',
//     children: [
//       {
//         type: 'group',
//         label: 'Item 1',
//         icon: <DownOutlined />,
//         children: [
//           {
//             label: 'Option 1',
//             key: 'setting:1',
//           },
//           {
//             label: 'Option 2',
//             key: 'setting:2',
//           },
//         ],
//       },
//       {
//         type: 'group',
//         label: 'Item 2',
//         children: [
//           {
//             label: 'Option 3',
//             key: 'setting:3',
//           },
//           {
//             label: 'Option 4',
//             key: 'setting:4',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     label: (
//       <a style={{textDecoration:"none" , paddingLeft:"2.5rem" , paddingRight:"2.5rem"}} href="/" rel="noopener noreferrer">
//        ELECTRONICS
//       </a>
//     ),
//     key: 'ELECTRONICS',
//   },
//   {
//     label: (
//       <a style={{textDecoration:"none", paddingLeft:"2.5rem" , paddingRight:"2.5rem"}} href="/" rel="noopener noreferrer">
//        MEN
//       </a>
//     ),
//     key: 'MEN',
//   },
//   {
//     label: (
//       <a style={{textDecoration:"none", paddingLeft:"2.5rem" , paddingRight:"2.5rem"}} href="/" rel="noopener noreferrer">
//        WOMEN
//       </a>
//     ),
//     key: 'WOMEN',
//   },
//   {
//     label: (
//       <a style={{textDecoration:"none", paddingLeft:"2.5rem" , paddingRight:"2.5rem"}} href="/" rel="noopener noreferrer">
//        HOME
//       </a>
//     ),
//     key: 'HOME',
//   },
//   {
//     label: (
//       <a style={{textDecoration:"none", paddingLeft:"2.5rem" , paddingRight:"2.5rem"}} href="/" rel="noopener noreferrer">
//        BEAUTY
//       </a>
//     ),
//     key: 'BUEATY',
//   },
//   {
//     label: (
//       <a style={{textDecoration:"none", paddingLeft:"2.5rem" , paddingRight:"2.5rem"}} href="/" rel="noopener noreferrer">
//        BABY
//       </a>
//     ),
//     key: 'BABY',
//   },
//   {
//     label: (
//       <a style={{textDecoration:"none", paddingLeft:"2.5rem" , paddingRight:"2.5rem"}} href="/" rel="noopener noreferrer">
//        SPORTS
//       </a>
//     ),
//     key: 'SPORTS',
//   },
//   {
//     label: (
//       <a style={{textDecoration:"none", paddingLeft:"2.5rem" , paddingRight:"2.5rem"}} href="/" rel="noopener noreferrer">
//        BEST SELLER
//       </a>
//     ),
//     key: 'BEST SELLER',
//   },
// ];
// const Navigation = () => {
//   const [current, setCurrent] = useState('mail');
//   const onClick = (e) => {
//     console.log('click ', e);
//     setCurrent(e.key);
//   };
//   return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
// };
// export default Navigation;