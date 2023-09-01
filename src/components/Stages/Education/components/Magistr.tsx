import { IQuestionQuestion } from "types";
import FormEducations, { AddEduFormValues } from "./FormEducations";
import { EducationQuestionsFormValues } from "../EducationQuestionsForm";
interface Edu {
  questions: IQuestionQuestion[] | undefined;
  formData: EducationQuestionsFormValues;
  handleAddEdu: (eduData: AddEduFormValues) => void;
}
const Magistr = ({ questions, formData, handleAddEdu }: Edu) => {
  return (
    <div>
      <FormEducations
        questions={questions}
        formData={formData}
        handleAddEdu={handleAddEdu}
        name="Magistratura"
      />
    </div>
  );
};

export default Magistr;
