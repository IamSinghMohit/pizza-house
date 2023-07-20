import { useSelector } from "react-redux";

export const useToastId = () => {
    const id = useSelector((state) => state.toast.toast_id);
    return id;
};
