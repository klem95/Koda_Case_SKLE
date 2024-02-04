
interface props {
    label: string
    setState: React.Dispatch<React.SetStateAction<string>>
    disabled: boolean
    value: string | null
}
function FormItem(props: props) {
    return (
        <form style={{ flexDirection: "column", justifyContent: "flex-end" }}>
            <label style={{ }}>{props.label}:</label>
            <input placeholder={props.value?? ""} disabled={props.disabled} type="text" onChange={((x) => { props.setState(x.target.value) })} ></input>
      </form>
  );
}

export default FormItem;