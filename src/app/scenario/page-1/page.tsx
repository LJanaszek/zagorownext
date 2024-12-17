import PageTemplate from "@/app/components/mainPage"
export default function Page() {
    return <PageTemplate
        question="What is your name?"
        answers={
            {
                answer1: "A",
                answer2: "B",
                answer3: "C"
            }}
        audio="/audio.mp3"
        nextPage={{
            link1: "/scenario/page-2",
            link2: "/scenario/page-3",
            link3: "/scenario/page-4"
        }}
    />;
}