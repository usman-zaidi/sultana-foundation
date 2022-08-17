<template>
    <CRow>
        <CCol :xs="12">
            <CCard>
                <CRow>
                    <CCol :xs="12">
                        <CCardHeader>
                            <h3>Add Blood Sample Detail</h3>
                        </CCardHeader>
                    </CCol>
                </CRow>
                <CRow>
                    <CCol :xs="12" :md="8">
                        <CCardBody class="p-4">
                            <CCard class="p-4">
                                <CRow>
                                    <CCol :md="12" class="text-right" style="text-align:right;">
                                        <h6>Hb % >13.5G% / >12.5G%</h6>
                                    </CCol>
                                </CRow>
                                <CForm class="row ">
                                    <CCol :md="6">
                                        <CFormLabel for="inputBGroup">Select Donor</CFormLabel>
                                        <CFormSelect id="inputBGroup">
                                            <option>Choose...</option>
                                            <option value="wd">.....</option>
                                            <option value="cd">......</option>
                                        </CFormSelect>
                                    </CCol>
                                    <CCol :md="6">
                                        <CFormLabel for="inputName">Skin</CFormLabel>
                                        <CFormInput id="inputName" type="text" />
                                    </CCol>
                                    <CCol :md="6">
                                        <CFormLabel for="inputName">RESP</CFormLabel>
                                        <CFormInput id="inputName" type="text" />
                                    </CCol>
                                    <CCol :md="6">
                                        <CFormLabel for="inputName">CVS</CFormLabel>
                                        <CFormInput id="inputName" type="text" />
                                    </CCol>
                                    <CCol :md="6">
                                        <CFormLabel for="inputName">CNS</CFormLabel>
                                        <CFormInput id="inputName" type="text" />
                                    </CCol>
                                    <CCol :md="6">
                                        <CFormLabel for="inputName">GIT</CFormLabel>
                                        <CFormInput id="inputName" type="text" />
                                    </CCol>
                                    <CCol :md="6">
                                        <CFormLabel for="inputName">H.P</CFormLabel>
                                        <CFormInput id="inputName" type="text" />
                                    </CCol>
                                    <CCol :md="6">
                                        <CFormLabel for="inputName">PULSE</CFormLabel>
                                        <CFormInput id="inputName" type="text" />
                                    </CCol>
                                    <CCol :md="6">
                                        <CFormLabel for="inputName">TEMP</CFormLabel>
                                        <CFormInput id="inputName" type="text" />
                                    </CCol>
                                    <CCol :md="6" class="p-4">
                                        <CFormLabel class="p-2">Fit</CFormLabel>
                                        <input
                                            id="validationFormCheck2"
                                            type="radio"
                                            name="fit"
                                            label="Male"
                                            required
                                        /> Yes
                                        <input
                                            id="validationFormCheck3"
                                            type="radio"
                                            name="fit"
                                            label="Female"
                                            required
                                        /> No
                                    </CCol>
                                    <CCol :xs="12" class="pt-4">
                                        <CButton type="submit" color="primary">Add Sample</CButton>
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
    name: "add-blood-sample",

}
</script>

<style scoped>

</style>
