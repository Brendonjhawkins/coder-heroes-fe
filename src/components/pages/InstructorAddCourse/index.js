// This 'Add Course' funcitonality should only appear on instructor sidebar

import React from 'react';
import '../../../styles/InstructorStyles/index.less';
import InstructorSidebar from '../InstructorHome/InstructorSidebar';
import InstructorAddCourseCards from './InstructorAddCourseCards';
import { Layout } from 'antd';
import Banner from '../../common/Banner';
import InstructorProgramList from './InstructorProgramList';

const { Content } = Layout;
const InstructorAddCourse = () => {
  return (
    <div>
      <Layout>
        <InstructorSidebar />
        <Content>
          <Banner />
          <InstructorProgramList />
          <InstructorAddCourseCards />
        </Content>
      </Layout>
    </div>
  );
};

export default InstructorAddCourse;
