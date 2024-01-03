import { FaTrash } from "react-icons/fa";
const Volunteertb = ({volunteer}) => {
  const {name,email,regdate}=volunteer;
    return (
        <div>
          
             <tr>
                      <td class="pr-4 py-3 ">{name}</td>
                      <td class="px-4 py-3">{email}</td>
                      <td class="px-4 py-3">{regdate}</td>
                      <td class="w-10 text-center">
                        <FaTrash />
                      </td>
                    </tr>
                   
        </div>
    );
};

export default Volunteertb;