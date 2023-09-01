import { IQuestionQuestion } from "types";
import FormEducations, { AddEduFormValues } from "./FormEducations";
import { EducationQuestionsFormValues } from "../EducationQuestionsForm";
interface Edu {
  questions: IQuestionQuestion[] | undefined;
  formData: EducationQuestionsFormValues;
  handleAddEdu: (eduData: AddEduFormValues) => void;
}
const PesheTehsil = ({ questions, formData, handleAddEdu }: Edu) => {
  return (
    <div>
      <FormEducations
        questions={questions}
        formData={formData}
        handleAddEdu={handleAddEdu}
        name="Peşə təhsili"
      />
    </div>
  );
};

export default PesheTehsil;
