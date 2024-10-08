export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      accountings: {
        Row: {
          amount: number
          id: string
          order_id: string
          payment_date: string
          payment_method: string
        }
        Insert: {
          amount: number
          id?: string
          order_id: string
          payment_date?: string
          payment_method: string
        }
        Update: {
          amount?: number
          id?: string
          order_id?: string
          payment_date?: string
          payment_method?: string
        }
        Relationships: [
          {
            foreignKeyName: "accountings_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      air_manuals: {
        Row: {
          airline_id: string
          category:
            | Database["public"]["Enums"]["airline document category"]
            | null
          document_url: string | null
          id: string
          title: string | null
        }
        Insert: {
          airline_id: string
          category?:
            | Database["public"]["Enums"]["airline document category"]
            | null
          document_url?: string | null
          id?: string
          title?: string | null
        }
        Update: {
          airline_id?: string
          category?:
            | Database["public"]["Enums"]["airline document category"]
            | null
          document_url?: string | null
          id?: string
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "air_manuals_airline_id_fkey"
            columns: ["airline_id"]
            isOneToOne: false
            referencedRelation: "airlines"
            referencedColumns: ["id"]
          },
        ]
      }
      aircrafts_register: {
        Row: {
          ac_airline_iata: string | null
          ac_code: string | null
          ac_model: string | null
          ac_ramp_image: string | null
          ac_registration_number: string | null
          ac_schema_image: string | null
          airline_id: string | null
          id: string
        }
        Insert: {
          ac_airline_iata?: string | null
          ac_code?: string | null
          ac_model?: string | null
          ac_ramp_image?: string | null
          ac_registration_number?: string | null
          ac_schema_image?: string | null
          airline_id?: string | null
          id?: string
        }
        Update: {
          ac_airline_iata?: string | null
          ac_code?: string | null
          ac_model?: string | null
          ac_ramp_image?: string | null
          ac_registration_number?: string | null
          ac_schema_image?: string | null
          airline_id?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "aircrafts_register_airline_id_fkey"
            columns: ["airline_id"]
            isOneToOne: false
            referencedRelation: "airlines"
            referencedColumns: ["id"]
          },
        ]
      }
      airlines: {
        Row: {
          aircraft_id: string | null
          awb_code: string | null
          callsign: string | null
          handling: Database["public"]["Enums"]["airline_handling"] | null
          Hubs: string | null
          iata: string | null
          icao: string | null
          id: string
          logo: string | null
          name: string | null
          website: string | null
        }
        Insert: {
          aircraft_id?: string | null
          awb_code?: string | null
          callsign?: string | null
          handling?: Database["public"]["Enums"]["airline_handling"] | null
          Hubs?: string | null
          iata?: string | null
          icao?: string | null
          id?: string
          logo?: string | null
          name?: string | null
          website?: string | null
        }
        Update: {
          aircraft_id?: string | null
          awb_code?: string | null
          callsign?: string | null
          handling?: Database["public"]["Enums"]["airline_handling"] | null
          Hubs?: string | null
          iata?: string | null
          icao?: string | null
          id?: string
          logo?: string | null
          name?: string | null
          website?: string | null
        }
        Relationships: []
      }
      airlines_realtime_events: {
        Row: {
          airline_id: string
          event_date: string | null
          event_description: string | null
          event_time: string | null
          event_timestamp: string
          event_title: string | null
          event_type: string
          id: string
          user_id: string | null
        }
        Insert: {
          airline_id: string
          event_date?: string | null
          event_description?: string | null
          event_time?: string | null
          event_timestamp?: string
          event_title?: string | null
          event_type: string
          id?: string
          user_id?: string | null
        }
        Update: {
          airline_id?: string
          event_date?: string | null
          event_description?: string | null
          event_time?: string | null
          event_timestamp?: string
          event_title?: string | null
          event_type?: string
          id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "airlines_realtime_events_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "airlines_realtime_events_user_id_fkey1"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "realtime_events_airline_id_fkey"
            columns: ["airline_id"]
            isOneToOne: false
            referencedRelation: "airlines"
            referencedColumns: ["id"]
          },
        ]
      }
      airports: {
        Row: {
          cntr_code: string | null
          iata: string | null
          id: string
          name: string | null
        }
        Insert: {
          cntr_code?: string | null
          iata?: string | null
          id?: string
          name?: string | null
        }
        Update: {
          cntr_code?: string | null
          iata?: string | null
          id?: string
          name?: string | null
        }
        Relationships: []
      }
      awbs: {
        Row: {
          awb_number: string
          awb_prefix: string
          book_type: Database["public"]["Enums"]["book_type"] | null
          consignee_id: string | null
          date_created: string | null
          flight_id: string | null
          id: string
          shipment_id: string | null
          shipper_id: string | null
          status: string | null
        }
        Insert: {
          awb_number: string
          awb_prefix: string
          book_type?: Database["public"]["Enums"]["book_type"] | null
          consignee_id?: string | null
          date_created?: string | null
          flight_id?: string | null
          id?: string
          shipment_id?: string | null
          shipper_id?: string | null
          status?: string | null
        }
        Update: {
          awb_number?: string
          awb_prefix?: string
          book_type?: Database["public"]["Enums"]["book_type"] | null
          consignee_id?: string | null
          date_created?: string | null
          flight_id?: string | null
          id?: string
          shipment_id?: string | null
          shipper_id?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_awb_shipper_id_fkey"
            columns: ["shipper_id"]
            isOneToOne: false
            referencedRelation: "shippers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_awbs_consignee_id_fkey"
            columns: ["consignee_id"]
            isOneToOne: false
            referencedRelation: "consignees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_awbs_flight_id_fkey"
            columns: ["flight_id"]
            isOneToOne: false
            referencedRelation: "flights"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_awbs_shipment_id_fkey"
            columns: ["shipment_id"]
            isOneToOne: false
            referencedRelation: "shipments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_awbs_status_fkey"
            columns: ["status"]
            isOneToOne: false
            referencedRelation: "bookstatus"
            referencedColumns: ["id"]
          },
        ]
      }
      bookstatus: {
        Row: {
          description: string | null
          id: string
          status: string | null
        }
        Insert: {
          description?: string | null
          id?: string
          status?: string | null
        }
        Update: {
          description?: string | null
          id?: string
          status?: string | null
        }
        Relationships: []
      }
      charges: {
        Row: {
          freight_charges: number | null
          id: string
          other_charges: number | null
          total_charges: number | null
        }
        Insert: {
          freight_charges?: number | null
          id?: string
          other_charges?: number | null
          total_charges?: number | null
        }
        Update: {
          freight_charges?: number | null
          id?: string
          other_charges?: number | null
          total_charges?: number | null
        }
        Relationships: []
      }
      consignee_declaration: {
        Row: {
          consignee_id: number | null
          date: string | null
          declaration_text: string | null
          id: string
          signature: string | null
        }
        Insert: {
          consignee_id?: number | null
          date?: string | null
          declaration_text?: string | null
          id?: string
          signature?: string | null
        }
        Update: {
          consignee_id?: number | null
          date?: string | null
          declaration_text?: string | null
          id?: string
          signature?: string | null
        }
        Relationships: []
      }
      consignees: {
        Row: {
          account_number: string | null
          address: string | null
          city: string | null
          fido: string
          id: string
          phone: string | null
          state: string | null
          zip: string | null
        }
        Insert: {
          account_number?: string | null
          address?: string | null
          city?: string | null
          fido?: string
          id?: string
          phone?: string | null
          state?: string | null
          zip?: string | null
        }
        Update: {
          account_number?: string | null
          address?: string | null
          city?: string | null
          fido?: string
          id?: string
          phone?: string | null
          state?: string | null
          zip?: string | null
        }
        Relationships: []
      }
      customer_company: {
        Row: {
          accounting_info: string | null
          address: string | null
          company_name: string
          contact_info: string | null
          created_at: string
          id: string
          logo: string | null
          phone: string | null
        }
        Insert: {
          accounting_info?: string | null
          address?: string | null
          company_name: string
          contact_info?: string | null
          created_at?: string
          id?: string
          logo?: string | null
          phone?: string | null
        }
        Update: {
          accounting_info?: string | null
          address?: string | null
          company_name?: string
          contact_info?: string | null
          created_at?: string
          id?: string
          logo?: string | null
          phone?: string | null
        }
        Relationships: []
      }
      customers: {
        Row: {
          address: string | null
          company_id: string | null
          contact_info: string | null
          created_at: string
          email: string | null
          full_name: string
          id: string
          phone: string | null
          user_id: string
        }
        Insert: {
          address?: string | null
          company_id?: string | null
          contact_info?: string | null
          created_at?: string
          email?: string | null
          full_name: string
          id?: string
          phone?: string | null
          user_id: string
        }
        Update: {
          address?: string | null
          company_id?: string | null
          contact_info?: string | null
          created_at?: string
          email?: string | null
          full_name?: string
          id?: string
          phone?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "customers_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "customer_company"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customers_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      dgr_classes: {
        Row: {
          description: string | null
          emergency_actions: string | null
          examples: string | null
          iata_code: string | null
          icao_class: string | null
          id: string
          label: string | null
          label_link: string | null
          un_id: string | null
        }
        Insert: {
          description?: string | null
          emergency_actions?: string | null
          examples?: string | null
          iata_code?: string | null
          icao_class?: string | null
          id?: string
          label?: string | null
          label_link?: string | null
          un_id?: string | null
        }
        Update: {
          description?: string | null
          emergency_actions?: string | null
          examples?: string | null
          iata_code?: string | null
          icao_class?: string | null
          id?: string
          label?: string | null
          label_link?: string | null
          un_id?: string | null
        }
        Relationships: []
      }
      dgr_un_list: {
        Row: {
          class_devision: string | null
          dgr_class_link: string | null
          drg_id: string | null
          excepted_qnty: string | null
          id: string
          limited_quantities: string | null
          name_description: string | null
          special_provision: string | null
          sub_risk: string | null
          un_number: number | null
          un_packing_group: string | null
        }
        Insert: {
          class_devision?: string | null
          dgr_class_link?: string | null
          drg_id?: string | null
          excepted_qnty?: string | null
          id?: string
          limited_quantities?: string | null
          name_description?: string | null
          special_provision?: string | null
          sub_risk?: string | null
          un_number?: number | null
          un_packing_group?: string | null
        }
        Update: {
          class_devision?: string | null
          dgr_class_link?: string | null
          drg_id?: string | null
          excepted_qnty?: string | null
          id?: string
          limited_quantities?: string | null
          name_description?: string | null
          special_provision?: string | null
          sub_risk?: string | null
          un_number?: number | null
          un_packing_group?: string | null
        }
        Relationships: []
      }
      flights: {
        Row: {
          aircraft_reg_id: string | null
          airline_id: string | null
          departure_airport: string
          destination_airport: string
          flight_number: string
          id: string
          SPD: string | null
          SPT: string | null
        }
        Insert: {
          aircraft_reg_id?: string | null
          airline_id?: string | null
          departure_airport: string
          destination_airport: string
          flight_number: string
          id?: string
          SPD?: string | null
          SPT?: string | null
        }
        Update: {
          aircraft_reg_id?: string | null
          airline_id?: string | null
          departure_airport?: string
          destination_airport?: string
          flight_number?: string
          id?: string
          SPD?: string | null
          SPT?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "flights_aircraft_reg_id_fkey"
            columns: ["aircraft_reg_id"]
            isOneToOne: false
            referencedRelation: "aircrafts_register"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "flights_airline_id_fkey"
            columns: ["airline_id"]
            isOneToOne: false
            referencedRelation: "airlines"
            referencedColumns: ["id"]
          },
        ]
      }
      flt_messages: {
        Row: {
          date_created: string | null
          date_updated: string | null
          freighter_id: string | null
          id: string
          message_type: Database["public"]["Enums"]["flt_msg_types"] | null
          messages_id: string | null
          msg_body: string | null
          version: string | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          freighter_id?: string | null
          id?: string
          message_type?: Database["public"]["Enums"]["flt_msg_types"] | null
          messages_id?: string | null
          msg_body?: string | null
          version?: string | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          freighter_id?: string | null
          id?: string
          message_type?: Database["public"]["Enums"]["flt_msg_types"] | null
          messages_id?: string | null
          msg_body?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "flt_messages_freighter_id_fkey"
            columns: ["freighter_id"]
            isOneToOne: false
            referencedRelation: "freight_schedules"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_flt_messages_messages_id_fkey"
            columns: ["messages_id"]
            isOneToOne: false
            referencedRelation: "messages"
            referencedColumns: ["id"]
          },
        ]
      }
      followers: {
        Row: {
          followed_at: string
          followed_id: string
          follower_id: string
        }
        Insert: {
          followed_at?: string
          followed_id: string
          follower_id: string
        }
        Update: {
          followed_at?: string
          followed_id?: string
          follower_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "followers_followed_id_fkey"
            columns: ["followed_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "followers_follower_id_fkey"
            columns: ["follower_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      freight_schedules: {
        Row: {
          ac_register: string | null
          airline: string | null
          connection_id: string | null
          created_at: string
          description: string | null
          flight_estgt: string | null
          flight_handling_status: Database["public"]["Enums"]["schedule_freight_handling_status"]
          flight_number: string | null
          flight_payload: string | null
          flight_psd: string | null
          flight_pst: string | null
          flight_route: string
          flight_type: Database["public"]["Enums"]["schedule_freight_flight_type"]
          ground_time_interval_minutes: number | null
          id: string
          updated_at: string | null
        }
        Insert: {
          ac_register?: string | null
          airline?: string | null
          connection_id?: string | null
          created_at?: string
          description?: string | null
          flight_estgt?: string | null
          flight_handling_status?: Database["public"]["Enums"]["schedule_freight_handling_status"]
          flight_number?: string | null
          flight_payload?: string | null
          flight_psd?: string | null
          flight_pst?: string | null
          flight_route: string
          flight_type: Database["public"]["Enums"]["schedule_freight_flight_type"]
          ground_time_interval_minutes?: number | null
          id?: string
          updated_at?: string | null
        }
        Update: {
          ac_register?: string | null
          airline?: string | null
          connection_id?: string | null
          created_at?: string
          description?: string | null
          flight_estgt?: string | null
          flight_handling_status?: Database["public"]["Enums"]["schedule_freight_handling_status"]
          flight_number?: string | null
          flight_payload?: string | null
          flight_psd?: string | null
          flight_pst?: string | null
          flight_route?: string
          flight_type?: Database["public"]["Enums"]["schedule_freight_flight_type"]
          ground_time_interval_minutes?: number | null
          id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "freight_schedules_connection_id_fkey"
            columns: ["connection_id"]
            isOneToOne: false
            referencedRelation: "freight_schedules"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "freight_schedules_flight_route_fkey"
            columns: ["flight_route"]
            isOneToOne: false
            referencedRelation: "airports"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_freight_schedules_ac_register_fkey"
            columns: ["ac_register"]
            isOneToOne: false
            referencedRelation: "aircrafts_register"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_freight_schedules_airline_fkey"
            columns: ["airline"]
            isOneToOne: false
            referencedRelation: "airlines"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          createdAt: string | null
          id: string
          message: string | null
          nickName: string | null
          user_id: string | null
        }
        Insert: {
          createdAt?: string | null
          id?: string
          message?: string | null
          nickName?: string | null
          user_id?: string | null
        }
        Update: {
          createdAt?: string | null
          id?: string
          message?: string | null
          nickName?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "messages_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          id: string
          order_date: string
          service_id: string
          status: string
          total_amount: number
        }
        Insert: {
          id?: string
          order_date?: string
          service_id: string
          status?: string
          total_amount: number
        }
        Update: {
          id?: string
          order_date?: string
          service_id?: string
          status?: string
          total_amount?: number
        }
        Relationships: [
          {
            foreignKeyName: "orders_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          followers: string | null
          full_name: string | null
          id: string
          location: string | null
          role: string | null
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          followers?: string | null
          full_name?: string | null
          id: string
          location?: string | null
          role?: string | null
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          followers?: string | null
          full_name?: string | null
          id?: string
          location?: string | null
          role?: string | null
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      ramp_check: {
        Row: {
          created_at: string
          data: string | null
          id: string
          inbound_flight_id: string | null
          outbound_flight_id: string | null
          status: Database["public"]["Enums"]["ramp_check_status"] | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          data?: string | null
          id?: string
          inbound_flight_id?: string | null
          outbound_flight_id?: string | null
          status?: Database["public"]["Enums"]["ramp_check_status"] | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          data?: string | null
          id?: string
          inbound_flight_id?: string | null
          outbound_flight_id?: string | null
          status?: Database["public"]["Enums"]["ramp_check_status"] | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ramp_check_inbound_flight_id_fkey"
            columns: ["inbound_flight_id"]
            isOneToOne: false
            referencedRelation: "flights"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ramp_check_outbound_flight_id_fkey"
            columns: ["outbound_flight_id"]
            isOneToOne: false
            referencedRelation: "flights"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ramp_check_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      ramp_check_arrival: {
        Row: {
          created_at: string
          documents_time: string | null
          id: string
          offload_bulk_time_end: string | null
          offload_bulk_time_start: string | null
          offload_ld_aft_time_end: string | null
          offload_ld_aft_time_start: string | null
          offload_ld_forward_time_end: string | null
          offload_ld_forward_time_start: string | null
          offload_md_time_end: string | null
          offload_md_time_start: string | null
          offload_permition_time: string | null
          ramp_check_id: string | null
        }
        Insert: {
          created_at?: string
          documents_time?: string | null
          id?: string
          offload_bulk_time_end?: string | null
          offload_bulk_time_start?: string | null
          offload_ld_aft_time_end?: string | null
          offload_ld_aft_time_start?: string | null
          offload_ld_forward_time_end?: string | null
          offload_ld_forward_time_start?: string | null
          offload_md_time_end?: string | null
          offload_md_time_start?: string | null
          offload_permition_time?: string | null
          ramp_check_id?: string | null
        }
        Update: {
          created_at?: string
          documents_time?: string | null
          id?: string
          offload_bulk_time_end?: string | null
          offload_bulk_time_start?: string | null
          offload_ld_aft_time_end?: string | null
          offload_ld_aft_time_start?: string | null
          offload_ld_forward_time_end?: string | null
          offload_ld_forward_time_start?: string | null
          offload_md_time_end?: string | null
          offload_md_time_start?: string | null
          offload_permition_time?: string | null
          ramp_check_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ramp_check_arrival_ramp_check_id_fkey"
            columns: ["ramp_check_id"]
            isOneToOne: false
            referencedRelation: "ramp_check"
            referencedColumns: ["id"]
          },
        ]
      }
      ramp_check_control_points: {
        Row: {
          cargo_comp_checked: boolean | null
          created_at: string
          edges_of_hatches_checked: boolean | null
          fuselage_checked: boolean | null
          id: string
          ramp_check_id: string | null
          stuff_ready: boolean | null
        }
        Insert: {
          cargo_comp_checked?: boolean | null
          created_at?: string
          edges_of_hatches_checked?: boolean | null
          fuselage_checked?: boolean | null
          id?: string
          ramp_check_id?: string | null
          stuff_ready?: boolean | null
        }
        Update: {
          cargo_comp_checked?: boolean | null
          created_at?: string
          edges_of_hatches_checked?: boolean | null
          fuselage_checked?: boolean | null
          id?: string
          ramp_check_id?: string | null
          stuff_ready?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "ramp_check_control_points_ramp_check_id_fkey"
            columns: ["ramp_check_id"]
            isOneToOne: false
            referencedRelation: "ramp_check"
            referencedColumns: ["id"]
          },
        ]
      }
      ramp_check_departure: {
        Row: {
          created_at: string
          documents_time: string | null
          id: string
          onload_bulk_time_end: string | null
          onload_bulk_time_start: string | null
          onload_ld_aft_time_end: string | null
          onload_ld_aft_time_start: string | null
          onload_ld_forward_time_end: string | null
          onload_ld_forward_time_start: string | null
          onload_md_time_end: string | null
          onload_md_time_start: string | null
          onload_permition_time: string | null
          ramp_check_id: string | null
          ramp_stuff_stand_time: string | null
        }
        Insert: {
          created_at?: string
          documents_time?: string | null
          id?: string
          onload_bulk_time_end?: string | null
          onload_bulk_time_start?: string | null
          onload_ld_aft_time_end?: string | null
          onload_ld_aft_time_start?: string | null
          onload_ld_forward_time_end?: string | null
          onload_ld_forward_time_start?: string | null
          onload_md_time_end?: string | null
          onload_md_time_start?: string | null
          onload_permition_time?: string | null
          ramp_check_id?: string | null
          ramp_stuff_stand_time?: string | null
        }
        Update: {
          created_at?: string
          documents_time?: string | null
          id?: string
          onload_bulk_time_end?: string | null
          onload_bulk_time_start?: string | null
          onload_ld_aft_time_end?: string | null
          onload_ld_aft_time_start?: string | null
          onload_ld_forward_time_end?: string | null
          onload_ld_forward_time_start?: string | null
          onload_md_time_end?: string | null
          onload_md_time_start?: string | null
          onload_permition_time?: string | null
          ramp_check_id?: string | null
          ramp_stuff_stand_time?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ramp_check_departure_ramp_check_id_fkey"
            columns: ["ramp_check_id"]
            isOneToOne: false
            referencedRelation: "ramp_check"
            referencedColumns: ["id"]
          },
        ]
      }
      ramp_check_finalize: {
        Row: {
          bulk_time: string | null
          chocks: string | null
          id: string
          ladder_move: string | null
          ladder_shifl: string | null
          ld_aft_time: string | null
          ld_forward_time: string | null
          md_time: string | null
          pushing_out: string | null
          ramp_check_id: string | null
        }
        Insert: {
          bulk_time?: string | null
          chocks?: string | null
          id?: string
          ladder_move?: string | null
          ladder_shifl?: string | null
          ld_aft_time?: string | null
          ld_forward_time?: string | null
          md_time?: string | null
          pushing_out?: string | null
          ramp_check_id?: string | null
        }
        Update: {
          bulk_time?: string | null
          chocks?: string | null
          id?: string
          ladder_move?: string | null
          ladder_shifl?: string | null
          ld_aft_time?: string | null
          ld_forward_time?: string | null
          md_time?: string | null
          pushing_out?: string | null
          ramp_check_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ramp_check_finalize_ramp_check_id_fkey"
            columns: ["ramp_check_id"]
            isOneToOne: false
            referencedRelation: "ramp_check"
            referencedColumns: ["id"]
          },
        ]
      }
      services: {
        Row: {
          created_at: string
          customer_id: string
          description: string | null
          id: string
          service_date: string
          service_type_id: string
          status: Database["public"]["Enums"]["ground_service_status"] | null
        }
        Insert: {
          created_at?: string
          customer_id: string
          description?: string | null
          id?: string
          service_date: string
          service_type_id: string
          status?: Database["public"]["Enums"]["ground_service_status"] | null
        }
        Update: {
          created_at?: string
          customer_id?: string
          description?: string | null
          id?: string
          service_date?: string
          service_type_id?: string
          status?: Database["public"]["Enums"]["ground_service_status"] | null
        }
        Relationships: [
          {
            foreignKeyName: "services_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "services_service_type_id_fkey"
            columns: ["service_type_id"]
            isOneToOne: false
            referencedRelation: "servicetype"
            referencedColumns: ["id"]
          },
        ]
      }
      servicesreports: {
        Row: {
          id: string
          report_date: string
          report_details: string | null
          service_id: string
        }
        Insert: {
          id?: string
          report_date?: string
          report_details?: string | null
          service_id: string
        }
        Update: {
          id?: string
          report_date?: string
          report_details?: string | null
          service_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "services_reports_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      servicetype: {
        Row: {
          created_at: string
          description: string | null
          id: string
          type_name: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          type_name: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          type_name?: string
        }
        Relationships: []
      }
      shc: {
        Row: {
          code: string | null
          description: string | null
          id: string
        }
        Insert: {
          code?: string | null
          description?: string | null
          id?: string
        }
        Update: {
          code?: string | null
          description?: string | null
          id?: string
        }
        Relationships: []
      }
      shipments: {
        Row: {
          dgr_id: string | null
          gross_weight: string | null
          id: string
          number_of_pieces: number | null
          proper_name: string
          shc_id: string | null
          un_id: string | null
          volume: string | null
        }
        Insert: {
          dgr_id?: string | null
          gross_weight?: string | null
          id?: string
          number_of_pieces?: number | null
          proper_name?: string
          shc_id?: string | null
          un_id?: string | null
          volume?: string | null
        }
        Update: {
          dgr_id?: string | null
          gross_weight?: string | null
          id?: string
          number_of_pieces?: number | null
          proper_name?: string
          shc_id?: string | null
          un_id?: string | null
          volume?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_shipments_dgr_id_fkey"
            columns: ["dgr_id"]
            isOneToOne: false
            referencedRelation: "dgr_classes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_shipments_shc_id_fkey"
            columns: ["shc_id"]
            isOneToOne: false
            referencedRelation: "shc"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_shipments_un_id_fkey"
            columns: ["un_id"]
            isOneToOne: false
            referencedRelation: "dgr_un_list"
            referencedColumns: ["id"]
          },
        ]
      }
      shipper_declaration: {
        Row: {
          date: string | null
          declaration_text: string | null
          id: string
          signature: string | null
        }
        Insert: {
          date?: string | null
          declaration_text?: string | null
          id: string
          signature?: string | null
        }
        Update: {
          date?: string | null
          declaration_text?: string | null
          id?: string
          signature?: string | null
        }
        Relationships: []
      }
      shippers: {
        Row: {
          account_number: string | null
          address: string | null
          city: string | null
          fido: string
          id: string
          phone: string | null
          state: string | null
          zip: string | null
        }
        Insert: {
          account_number?: string | null
          address?: string | null
          city?: string | null
          fido?: string
          id?: string
          phone?: string | null
          state?: string | null
          zip?: string | null
        }
        Update: {
          account_number?: string | null
          address?: string | null
          city?: string | null
          fido?: string
          id?: string
          phone?: string | null
          state?: string | null
          zip?: string | null
        }
        Relationships: []
      }
      todo_shares: {
        Row: {
          shared_at: string
          shared_by: string
          shared_to: string
          todo_id: string
        }
        Insert: {
          shared_at?: string
          shared_by: string
          shared_to: string
          todo_id: string
        }
        Update: {
          shared_at?: string
          shared_by?: string
          shared_to?: string
          todo_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "todo_shares_shared_to_fkey"
            columns: ["shared_to"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "todo_shares_todo_id_fkey"
            columns: ["todo_id"]
            isOneToOne: false
            referencedRelation: "todos"
            referencedColumns: ["id"]
          },
        ]
      }
      todos: {
        Row: {
          category: string | null
          content: string | null
          id: string
          inserted_at: string | null
          is_complete: boolean | null
          shared_id: string | null
          tags: string | null
          title: string | null
          user_id: string
        }
        Insert: {
          category?: string | null
          content?: string | null
          id?: string
          inserted_at?: string | null
          is_complete?: boolean | null
          shared_id?: string | null
          tags?: string | null
          title?: string | null
          user_id?: string
        }
        Update: {
          category?: string | null
          content?: string | null
          id?: string
          inserted_at?: string | null
          is_complete?: boolean | null
          shared_id?: string | null
          tags?: string | null
          title?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "todos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      share: {
        Args: {
          todo_id: string
          shared_to: string
        }
        Returns: undefined
      }
      share_todo: {
        Args: {
          shared_by: string
          shared_to: string
          todo_id: string
        }
        Returns: undefined
      }
    }
    Enums: {
      "airline document category":
        | "GOPM"
        | "GOCHM"
        | "GOSQM"
        | "SLM"
        | "РОНО"
        | "AHM"
        | "GOM"
        | "TELEXES"
        | "ULD"
        | "COMMON"
      airline_handling: "scheduled" | "charter"
      "book status": "KK" | "CC" | "NR"
      book_type: "TRANSFER" | "ONE_LEG"
      flt_msg_types: "FFM" | "CPM" | "LDM" | "FWB"
      ground_service_status:
        | "New"
        | "Pending"
        | "Accept"
        | "Confirmed"
        | "Completed"
        | "Approved"
        | "Accounted"
        | "Reject"
        | "Canceled"
      note_category: "URGENT" | "COMMON" | "SHIFT" | "REMINDER"
      ramp_check_status: "new" | "approved"
      schedule_freight_flight_type: "Inbound" | "Outbound"
      schedule_freight_handling_status:
        | "New"
        | "InPlan"
        | "Canceled"
        | "Completed"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
