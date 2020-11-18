<template>
    <Page>
        <ActionBar title="Home"/>
        <ScrollView>
            <StackLayout class="home-panel">
                <!--Add your page content here-->
                <Label textWrap="true" text="Play with NativeScript!" class="h2 description-label" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
export default {
    data () {
        return {
        };
    },
}
</script>

<style scoped>
.home-panel {
    vertical-align: center;
    font-size: 20;
    margin: 15;
}

.description-label {
    margin-bottom: 15;
}
</style>
