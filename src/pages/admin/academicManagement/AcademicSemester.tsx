import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const {data} = useGetAllSemestersQuery(undefined);
  return (
    <div>
      <p>This is Academic Semester</p>
    </div>
  );
};

export default AcademicSemester;
