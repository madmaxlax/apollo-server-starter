/* eslint-disable @typescript-eslint/no-explicit-any */
import Chance from 'chance';
import { randomBytes } from 'crypto';
import { allRoles, latest_recommendations, serviced_location, User } from '../models';
interface Mixins {
  user(options?: Partial<User>): User;
  userRole(): string;
  servicedLocation(options?: Partial<serviced_location>): serviced_location;
  latestRecommendation(options?: Partial<latest_recommendations>): latest_recommendations;
}

const chance = new Chance() as Chance.Chance & Mixins;

export const Random = chance;

chance.mixin({
  userRole: () => {
    return chance.pickone(allRoles);
  },
  user: (options: Partial<User> = {}) => {
    const defaults = {
      _id: Random.guid(),
      uuid: Random.string(),
      firstName: Random.first(),
      lastName: Random.last(),
      active: true,
      company: Random.company(),
      title: Random.name_prefix(),
      notes: Random.paragraph(),
      type: Random.userRole(),
      username: Random.string(),
      departmentName: Random.string(),
      departmentType: Random.string(),
      phoneNumber: Random.string(),
      businessAddress: Random.string(),
      createdAt: Date.now(),
    };

    return { ...defaults, ...options };
  },

  servicedLocation: (options: Partial<serviced_location> = {}) => {
    const defaults = {
      account_engineer_employee_id: Random.natural({ min: 1, max: 99999 }),
      address_line_1_text: Random.address(),
      city_name: Random.city(),
      country_code: Random.country(),
      country_name: Random.country({ full: true }),
      id: Random.natural({ min: 1, max: 99999 }),
      index_number: Random.string({ alpha: false, numeric: true, symbols: false }),
      index_record_number: Random.string({ alpha: false, numeric: true, symbols: false }),
      latitude_longitude_match_description: Random.word(),
      latitude_measure: Random.latitude(),
      location_engineering_name: Random.company(),
      longitude_measure: Random.longitude(),
      postal_code: Random.postal(),
      state_province_code: Random.state(),
      state_province_name: Random.state({ full: true })
    } as serviced_location

    return { ...defaults, ...options }
  },

  latestRecommendation: (options: Partial<latest_recommendations> = {}) => {
    const defaults = {
      active_indicator: Random.natural(),
      ae_narrative: Random.sentence(),
      ae_prospect_client_reaction_narrative: Random.string(),
      ae_synopsis_narrative: Random.string(),
      client_feedback_narrative: Random.sentence(),
      client_support_team_priority_level_code: Random.natural(),
      client_support_team_priority_level_description: Random.string(),
      deviation_from_standards_indicator: Random.natural(),
      element_type_code: Random.string(),
      element_type_description: Random.string(),
      expected_completion_date: Random.date(),
      fe_prospect_client_reaction_narrative: Random.sentence(),
      fe_status_narrative: Random.sentence(),
      fe_synopsis_narrative: Random.sentence(),
      full_narrative: Random.sentence(),
      hazard_category_code: Random.string(),
      hazard_category_description: Random.word(),
      hazard_group_code: Random.natural(),
      hazard_group_description: Random.string(),
      hazard_group_risk_mark_category_code: Random.natural(),
      hazard_group_risk_mark_category_description: Random.string(),
      hazard_narrative: Random.sentence(),
      higher_relative_likelihood_indicator: Random.string(),
      original_create_date: Random.date(),
      pd_le_after_amount: Random.natural(),
      pd_le_before_amount: Random.natural(),
      primary_reference_number: Random.string(),
      prospect_client_reaction_type_code: Random.string(),
      prospect_client_reaction_type_description: Random.string(),
      prospect_client_reaction_type_report_description: Random.string(),
      rcmdtn_code: Random.string(),
      rcmdtn_description: Random.string(),
      rcmdtn_header_indicator: Random.string(),
      rcmdtn_id: Random.natural(),
      rcmdtn_number: Random.natural(),
      rcmdtn_relationship_type_code: Random.string(),
      rcmdtn_relationship_type_description: Random.string(),
      reference_number: Random.string(),
      relative_likelihood_code: Random.string(),
      relative_likelihood_description: Random.string(),
      relative_likelihood_effective_date: Random.natural(),
      risk_mark_score_differential: Random.natural(),
      serviced_location_id: Random.natural(),
      status_code: Random.string(),
      status_description: Random.string(),
      status_update_date: Random.date(),
      target_rcmdtn_indicator: Random.natural(),
      te_day_downtime_after_count: Random.natural(),
      te_day_downtime_before_count: Random.natural(),
      te_le_after_amount: Random.natural(),
      te_le_before_amount: Random.natural(),
      technical_detail_narrative: Random.sentence(),
      total_le_after_amount: Random.natural(),
      total_le_before_amount: Random.natural(),
      total_le_reduction_amount: Random.natural(),
      serviced_location: Random.servicedLocation()
    } as latest_recommendations;

    return { ...defaults, ...options }
  }
});
