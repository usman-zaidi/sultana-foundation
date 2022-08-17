<template>
    <CRow>
        <CCol :xs="12">
            <CCard>
                <CRow>
                    <CCol :xs="12">
                <CCardHeader>
                    <h3>Add Question</h3>
                </CCardHeader>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol :xs="5">
                <CCardBody class="p-4">
                    <CCard class="p-4">
                    <CForm class="row ">
                        <CCol :md="6">
                            <CFormLabel for="inputBGroup">Question Type</CFormLabel>
                            <CFormSelect id="inputBGroup">
                                <option>Choose...</option>
                                <option value="wd">Donor Question</option>
                                <option value="cd">Paitent Question</option>
                            </CFormSelect>
                        </CCol>

                        <CCol :md="6">
                            <CFormLabel for="inputBGroup">Answer Type</CFormLabel>
                            <CFormSelect id="inputBGroup">
                                <option>Choose...</option>
                                <option value="wd">text</option>
                                <option value="cd">check box</option>
                            </CFormSelect>
                        </CCol>
                        <CCol :md="12">
                            <CFormLabel for="exampleFormControlTextarea1">Question</CFormLabel>
                            <CFormTextarea id="exampleFormControlTextarea1" rows="3"></CFormTextarea>
                        </CCol>
                        <CCol :xs="12" class="pt-4">
                            <CButton type="submit" color="primary">Add Question</CButton>
                        </CCol>
                    </CForm>
                    </CCard>
                </CCardBody>
                    </CCol>
                </CRow>
            </CCard>
        </CCol>
    </CRow>
</template>

<script>

export default {
    name: "add-question",
}
</script>

<style scoped>

</style>
