import style from "@/css/style.module.css";

export function ModalSearch({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <div className={style.backdrop}></div>
      <dialog open={true} className={style.modal}>
        {children}
      </dialog>
    </div>
  );
}
