
import { Field, Float, InputType, Int, ObjectType} from 'type-graphql';

@ObjectType({ description: 'columns and relationships of "serviced_location"' })
@InputType('ServicedLocationInput')
export class serviced_location {
  __typename?: 'serviced_location';

  @Field(type => Float, { nullable: true })
  account_engineer_employee_id!: number;

  @Field(type => String, { nullable: true })
  address_line_1_text!: string;

  @Field(type => String, { nullable: true })
  address_line_2_text!: string;

  @Field(type => String, { nullable: true })
  city_name!: string;

  @Field(type => String, { nullable: true })
  country_code!: string;

  @Field(type => String, { nullable: true })
  country_name!: string;

  @Field(type => String, { nullable: true })
  county_name!: string;

  @Field(type => Float, { nullable: true })
  id!: number;

  @Field(type => String, { nullable: true })
  index_number!: string;

  @Field(type => String, { nullable: true })
  index_record_number!: string;

  @Field(type => String, { nullable: true })
  latitude_longitude_match_description!: string;

  @Field(type => Float, { nullable: true })
  latitude_measure!: number;

  @Field(type => String, { nullable: true })
  location_engineering_name!: string;

  @Field(type => Float, { nullable: true })
  longitude_measure!: number;

  @Field(type => String, { nullable: true })
  postal_code!: string;

  @Field(type => String, { nullable: true })
  state_province_code!: string;

  @Field(type => String, { nullable: true })
  state_province_name!: string;
};

/** Example recommendation type. 
 * 
 * **Fields may not be up to date, nor exhaustive** */
@ObjectType()
export class latest_recommendations {
 
  @Field(type => String, { nullable: true })
  active_indicator!: number;
 
  @Field(type => String, { nullable: true })
  ae_narrative!: string;
 
  @Field(type => String, { nullable: true })
  ae_prospect_client_reaction_narrative!: string;
 
  @Field(type => String, { nullable: true })
  ae_synopsis_narrative!: string;
 
  @Field(type => String, { nullable: true })
  client_feedback_narrative!: string;
 
  @Field(type => String, { nullable: true })
  client_support_team_priority_level_code!: number;
 
  @Field(type => String, { nullable: true })
  client_support_team_priority_level_description!: string;
 
  @Field(type => String, { nullable: true })
  deviation_from_standards_indicator!: number;
 
  @Field(type => String, { nullable: true })
  element_type_code!: string;
 
  @Field(type => String, { nullable: true })
  element_type_description!: string;
 
  @Field(type => String, { nullable: true })
  expected_completion_date!: Date;
 
  @Field(type => String, { nullable: true })
  fe_prospect_client_reaction_narrative!: string;
 
  @Field(type => String, { nullable: true })
  fe_status_narrative!: string;
 
  @Field(type => String, { nullable: true })
  fe_synopsis_narrative!: string;
 
  @Field(type => String, { nullable: true })
  full_narrative!: string;
 
  @Field(type => String, { nullable: true })
  hazard_category_code!: string;
 
  @Field(type => String, { nullable: true })
  hazard_category_description!: string;
 
  @Field(type => String, { nullable: true })
  hazard_group_code!: number;
 
  @Field(type => String, { nullable: true })
  hazard_group_description!: string;
 
  @Field(type => String, { nullable: true })
  hazard_group_risk_mark_category_code!: number;
 
  @Field(type => String, { nullable: true })
  hazard_group_risk_mark_category_description!: string;
 
  @Field(type => String, { nullable: true })
  hazard_narrative!: string;
 
  @Field(type => String, { nullable: true })
  higher_relative_likelihood_indicator!: string;
 
  @Field(type => String, { nullable: true })
  original_create_date!: Date;
 
  @Field(type => String, { nullable: true })
  pd_le_after_amount!: number;
 
  @Field(type => String, { nullable: true })
  pd_le_before_amount!: number;
 
  @Field(type => String, { nullable: true })
  primary_reference_number!: string;
 
  @Field(type => String, { nullable: true })
  prospect_client_reaction_type_code!: string;
 
  @Field(type => String, { nullable: true })
  prospect_client_reaction_type_description!: string;
 
  @Field(type => String, { nullable: true })
  prospect_client_reaction_type_report_description!: string;
 
  @Field(type => String, { nullable: true })
  rcmdtn_code!: string;
 
  @Field(type => String, { nullable: true })
  rcmdtn_description!: string;
 
  @Field(type => String, { nullable: true })
  rcmdtn_header_indicator!: string;
 
  @Field(type => Int, { nullable: true })
  rcmdtn_id!: number;
 
  @Field(type => Int, { nullable: true })
  rcmdtn_number!: number;
 
  @Field(type => String, { nullable: true })
  rcmdtn_relationship_type_code!: string;
 
  @Field(type => String, { nullable: true })
  rcmdtn_relationship_type_description!: string;
 
  @Field(type => String, { nullable: true })
  reference_number!: string;
 
  @Field(type => String, { nullable: true })
  relative_likelihood_code!: string;
 
  @Field(type => String, { nullable: true })
  relative_likelihood_description!: string;
 
  @Field(type => String, { nullable: true })
  relative_likelihood_effective_date!: number;
 
  @Field(type => String, { nullable: true })
  risk_mark_score_differential!: number;
 
  @Field(type => serviced_location, { description: 'An object relationship', nullable: true })
  serviced_location!: serviced_location;
 
  @Field(type => Int, { nullable: true })
  serviced_location_id!: number;
 
  @Field(type => String, { nullable: true })
  status_code!: string;
 
  @Field(type => String, { nullable: true })
  status_description!: string;
 
  @Field(type => String, { nullable: true })
  status_update_date!: Date;
 
  @Field(type => String, { nullable: true })
  target_rcmdtn_indicator!: number;
 
  @Field(type => Int, { nullable: true })
  te_day_downtime_after_count!: number;
 
  @Field(type => Int, { nullable: true })
  te_day_downtime_before_count!: number;
 
  @Field(type => String, { nullable: true })
  te_le_after_amount!: number;
 
  @Field(type => String, { nullable: true })
  te_le_before_amount!: number;
 
  @Field(type => String, { nullable: true })
  technical_detail_narrative!: string;
 
  @Field(type => String, { nullable: true })
  total_le_after_amount!: number;
 
  @Field(type => String, { nullable: true })
  total_le_before_amount!: number;
 
  @Field(type => String, { nullable: true })
  total_le_reduction_amount!: number;
};

