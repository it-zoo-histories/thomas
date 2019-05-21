import React, {Component} from 'react';

class FormConstructor extends Component{
    configureField = (name, previewName, actor, index) => {
        let param = ``;

        console.log(param)
        return (
            <div className="field_section" key={index}>
                {/*<div className={"field_" + name + "_name"}>{previewName}</div>*/}
                {
                    actor === "password_input" ?
                        <input className={"form-control"} type="password" action={actor}
                               onChange={this.props.ActionsEntry} placeholder={name}/>
                        :
                        <input className={"form-control"} action={actor}
                               onChange={this.props.ActionsEntry} placeholder={name}/>

                }
            </div>
        )
    }

    render = () => {
        const {fileds} = this.props;

        return(
            <div className="form_container">
                {fileds != null ?
                <div className="fields">
                    {fileds.map((field, index) => {
                        return (
                            this.configureField.bind(this)(field.name, field.previewName, field.actor, index)
                        )
                    })}
                    <button className="btn btn-block" name={this.props.button}></button>
                </div> 
                :
                // inser Error Modal Window!
                null   
            }
            </div>
        )
    }
}