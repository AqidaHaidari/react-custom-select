import styles from './select.module.css'

type selectOption={
    label:String
    value:any
}

type selectProps={
    options:selectOption[]
    value?:selectOption
    onChange:(value:selectOption | undefined)=>void
}
export function Select({value, onChange, options}:selectProps){
    return (<div tabIndex={0} className={styles.container}>
        <span className={styles.value}>{value.label}</span>
        <button className={styles['clear-btn']}>&times;</button>
        <div className={styles.devider}></div>
        <div className={styles.caret}></div>
        <ul className={`${styles.options} ${styles.show}`}>
            {options.map(option=>(
                <li key={option.label} className={styles.option}>{option.label}</li>
            ))}
        </ul>
    </div>)
   
    
}