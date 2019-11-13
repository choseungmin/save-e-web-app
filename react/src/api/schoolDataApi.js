import axios from 'axios';

const selectTotalBillPerClass = async (selectedSchoolList, selectedDate) => {
  try {
    const param = {sclDiv: selectedSchoolList, tgtDate: selectedDate};
    const response = await axios.post('/api/schoolData/selectTotalBillPerClass', param);
    if(response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch (e) {
    console.error(e);
  }
};




export {
  selectTotalBillPerClass,
};
