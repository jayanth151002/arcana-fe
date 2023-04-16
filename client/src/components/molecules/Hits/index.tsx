// import { Hit as AlgoliaHit } from '@algolia/client-search';
// import { Table } from 'antd';
// import { useHits, UseHitsProps } from 'react-instantsearch-hooks';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';

// export type HitsProps<THit> = React.ComponentProps<'div'> &
//   UseHitsProps & {
//     hitComponent: (props:any) => JSX.Element;
// };


// interface CourseRowProps{
//   key: string;
//   name: string;
//   courseCode: string,
//   description: string,
//   deptCode:string
// }

// export function Hits<THit extends AlgoliaHit<Record<string, unknown>>>({
//   hitComponent: Hit,
// }: HitsProps<THit>) {
//   const columns = [
//     {
//       title: 'Course',
//       key: 'operation',
//       render: (course: CourseRowProps) =>
//         <a onClick={() => {
//           pushEvent('CourseFromSearchResultsActivated',{courseId: course.courseCode, deptCode:course.deptCode, name, emailAddress})
//           const currentDept = departments.find((dept:Department) => dept.deptCode === course.deptCode)
//           dispatch(setActiveDepartmentCode(currentDept.deptCode ?? DepartmentCode.CS));
//           if (courseList.some((c: NodeData) => c.id === course.courseCode)) {
//             dispatch(setActiveCourse(
//               {
//                 courseId: course.courseCode,
//                 ...courseList.find((c: NodeData) => c.id === course.courseCode)
//               }
//             ))
//           }
//         }}>
//         {course.name}
//         </a>,
//     },
//     {
//       title: 'Creds',
//       sorter: (a, b) => {
//           return a.credits - b.credits
//       },
//       dataIndex: 'credits',
//       key: 'credits',
//       width: '25%'
//     },
//   ]
//   const { hits } = useHits();
//   const data = hits.map((hit) => {
//     return {
//       key: hit.objectID,
//       name: hit.name,
//       courseCode:hit.courseCode,
//       credits:hit.credits,
//       description: hit.description,
//       deptCode:hit.deptCode
//     }
//   })
//   return (
//       <Table
//         columns={columns}
//         pagination={{ pageSize: 20 }}
//         scroll={{ y: 800, x:300 }}
//         expandable={{
//           expandedRowRender: course => <p style={{ margin: 0 }}>{course.description}</p>,
//           rowExpandable: course => course.description && course.description.trim().length > 0,
//         }}
//         dataSource={data}
//     />
//   );
// }
export { }