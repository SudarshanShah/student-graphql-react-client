import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_STUDENTS } from '../graphql/queries';

const Student = () => {

    const {loading, error, data} = useQuery(GET_STUDENTS);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error...</p>


    return data.getAllStudents.map(({sid, name, dept, favSport, classTeacher}) => (
        <div key={sid}>
            <h3>{name}</h3>
            <p>{dept}, {favSport}, {classTeacher}</p>
        </div>
    ));
}

export default Student;