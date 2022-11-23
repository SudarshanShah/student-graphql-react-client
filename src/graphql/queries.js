import { gql } from "@apollo/client";

const GET_STUDENTS = gql`
query {
	getAllStudents {
        sid
		name
		dept
		favSport
	}
}
`;

export { GET_STUDENTS };