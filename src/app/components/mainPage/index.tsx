import Link from "next/link";
import styles from "./mainPage.module.scss"
type Props = {
    question: string,
    answers: {
        answer1: string,
        answer2?: string,
        answer3?: string
    }
    audio: string,
    nextPage: {
        link1: string,
        link2?: string,
        link3?: string
    }
}
export default function PageTemplate({ answers, audio, question, nextPage }: Props) {
    console.log(answers)
    return (
        <div className={styles.mainDiv}>
            <div className={styles.content}>
                <nav></nav>
                <audio src={audio} controls></audio>
                <div className={styles.choice}>
                    <h1>{question}</h1>
                    <div className={styles.buttons}>
                        <Link href={nextPage.link1} className={styles.buttonWhite}>{answers.answer1}</Link>
                        {answers.answer2 && nextPage.link2 &&
                            <Link href={nextPage.link2} className={styles.buttonBlue}>{answers.answer2}</Link>
                        }
                        {answers.answer3 && nextPage.link3 &&
                            <Link href={nextPage.link3} className={styles.buttonWhite}>{answers.answer3}</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}