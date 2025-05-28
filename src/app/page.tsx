import Text from "@/ui/text/text";
import css from "@/styles/home.module.css";
import Button from "@/ui/button/button";

export default function Home() {
    return (
        <div className={css.container}>
            <Text as="h1" fontSize="40px" fontWeight="500">
                اپلیکیشن مدیریت بلاگ
            </Text>
            <div className={css["texts-container"]}>
                <Text as="p" color="var(--text-base-500)" fontWeight="100">
                    جایی که قراره بتونی یه اپلیکیشن بلاگ کامل رو مدیریت کنی!
                </Text>
                <Text as="p" color="var(--text-base-500)" fontWeight="100">
                    بتونی بلاگ بسازی ، کامنت بگذاری و در پنلت همه اتفاقات رو رصد
                    کنی!
                </Text>
            </div>
            <div className={css["buttons-container"]}>
                <Button
                    fontSize="16px"
                    textColor="var(--text-base-600)"
                    bg="inherit"
                    styles={{ border: "1px solid var(--text-base-600)" }}
                >
                    مطالعه بلاگ ها
                </Button>
                <Button fontSize="16px">مدیریت بلاگ ها</Button>
            </div>
        </div>
    );
}
