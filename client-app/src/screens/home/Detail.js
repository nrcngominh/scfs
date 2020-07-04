const Detail = {
    template: `
        <Page>
            <StackLayout>
                <Button @tap="onCloseTap" text="Close"/>
            </StackLayout>
        </Page>
    `,
    methods: {
        onCloseTap: function() {
            this.$modal.close();
        }
    }
}
export default Detail;